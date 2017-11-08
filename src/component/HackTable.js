import React, { Component } from 'react';
import './HackTable_CSS.css';

class HackTable extends Component {

 constructor(props){
   super(props);
   this.sortBy = this.sortBy.bind(this);
   this.initObjs = this.initObjs.bind(this);
   this.state = {
      sortOrder: 'UNS',
      sortColumn:''
   }

   this.rowDetails =  [];
   this.columnHeaders = [];

   this.config = {
     sortableColumns:[],
     columnNames:{},
   };


 }



 initObjs(props){
   this.rowDetails =  props.details;

   //this.sortableColumns = props.details[0]? Object.keys(props.details[0]):['empty'];
   this.columnHeaders = props.details[0]? Object.keys(props.details[0]) :['empty'];

   if(props.config){
          this.config = props.config;
   }
 }

 constructHeaders(headers){

   let ths = [];
   for (var header of headers) {
      let sortableButton;
      if(this.config.sortableColumns.includes(header)){

        if(this.state.sortColumn===header && this.state.sortOrder==='ASC'){
        sortableButton =  <button  name={header} value="DES" onClick={this.sortBy}>DES</button>
        }else if(this.state.sortColumn===header && this.state.sortOrder==='DES'){
          sortableButton = <button  name={header} value="ASC" onClick={this.sortBy}>ASC</button>
        }else{
          sortableButton = <div>
                             <button  name={header} value="ASC" onClick={this.sortBy}>ASC</button>
                             <button  name={header} value="DES" onClick={this.sortBy}>DES</button>
                           </div>
        }


      }

      let columnHeader = this.config.columnNames[header];
      ths.push( <th key={header}>
                    <div><div className="float-left">{columnHeader}</div> {sortableButton}</div>
                  </th>
                 );
   }
   ths.push( <th key="ht_action">
               Action
             </th>
              );
   return ths;
 }

 constructDetailRows(details){
   let ths = [];
   let rowId = 0;

   let editDeleteK = "ed_"

    for (var row of details) {

      rowId = rowId + 1;
      let rowUK = "row_" + rowId;
      editDeleteK = editDeleteK + " " +rowId;
      let tds = [];

      let colIndex = 0;
      for (var header of Object.keys(row)) {
             tds.push(<td key={colIndex}>{row[header]}</td>);
             colIndex++;
      }


      tds.push(<td key={colIndex}><button onClick={this.onEdit.bind(this,row)}>Edit</button></td>);

      ths.push( <tr key={rowUK}>{tds}</tr> );
    }

   return ths;
 }


 onEdit(row,e){

  this.props.onEdit(row);
 }

 sortBy(e){
   let sortOrder = e.target.getAttribute("value");
   let sortColumn = e.target.getAttribute("name");

   this.setState({sortOrder:  sortOrder, sortColumn: sortColumn});
 }

 predicateBy(prop){

    if(this.state.sortOrder==='ASC'){
       return function(a,b){
          if( a[prop] > b[prop]){
              return 1;
          }else if( a[prop] < b[prop] ){
              return -1;
          }
          return 0;
       }
     }else{
       return function(a,b){
          if( a[prop] > b[prop]){
              return -1;
          }else if( a[prop] < b[prop] ){
              return 1;
          }
          return 0;
       }
     }
 }

 componentDidUpdate(){

 }

 componentDidMount() {


 }


 componentWillUnmount(){

 }


  render() {

     this.initObjs(this.props);
     this.sortedDetails = this.rowDetails.sort(this.predicateBy(this.state.sortColumn));
     this.columnHeadersJSX = this.constructHeaders( this.columnHeaders);
     this.columnRowsJSX = this.constructDetailRows(this.sortedDetails);


      return (
        <table>
      <thead>
        <tr>
          {this.columnHeadersJSX}
        </tr>
      </thead>
      <tbody>
          {this.columnRowsJSX}
      </tbody>
    </table>
     );
  }
}


export default HackTable;
