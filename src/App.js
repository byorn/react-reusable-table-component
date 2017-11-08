import React, { Component } from 'react';
import HackTable from './component/HackTable.js';

class App extends Component {

  constructor(props){
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.rowDetails = [];
    this.config = {
      sortableColumns:['id','title','description'],
      columnNames:{'id':'ID','title':'Title','description':'Description'}
    }
  }

  componentDidMount() {
    this.loadData();
  }

  loadData(){

    // let config = {
    //   withCredentials:true,
    // }
    // axios.get(Config.getServiceURL()+'/getBacklog',config)
    //       .then(this.callback)
    //       .catch(function (error) {
    //         console.log("error" + error);
    //       });
  }

  onEdit(){
    alert('on edit button clicked');
  }


  render() {

    this.rowDetails = [ {"id":1,"title":"Jack and the Bean Stark", "description":"story about giants"},
            {"id":3,"title":"Snow White And Seven Dwarfs", "description":"story about dwarfs"},
            {"id":2,"title":"Rapunzel", "description":"story about hair"},
            {"id":5,"title":"Goldilocks", "description":"story about bears"}

    ];

    return (
      <div className="App">


          <HackTable details={this.rowDetails} onEdit={this.onEdit} config={this.config}/>
      </div>
    );
  }
}

export default App;
