import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "header": {
        "backgroundColor": "#282828",
        "paddingBottom": 20
    },
    "logo": {
        "fontFamily": "'BioRhyme', serif",
        "fontStretch": "expanded",
        "fontSizeAdjust": "auto",
        "fontWeight": "500"
    },
    "body": {
        "backgroundColor": "#F7F7F7",
        "fontFamily": "'Slabo 27px', serif"
    },
    "table tr th": {
        "color": "#CCCCCC"
    },
    "table tr td": {
        "color": "#CCCCCC"
    },
    "span": {
        "color": "#CCCCCC"
    },
    "h1": {
        "color": "#CCCCCC",
        "fontSize": "2.5 rem"
    },
    "h2": {
        "color": "#A55F00"
    },
    "h3": {
        "color": "#A55F00"
    },
    "h4": {
        "color": "#A55F00"
    },
    "p": {
        "color": "#CCCCCC",
        "fontSize": 1.5
    },
    "content": {
        "paddingTop": 50,
        "backgroundColor": "#333333"
    },
    "more-verticle-space": {
        "paddingBottom": "20%"
    },
    "margin-left-15": {
        "paddingLeft": 15
    },
    "myinfo": {
        "fontSize": 1,
        "marginBottom": 400
    },
    "footer": {
        "paddingTop": 100,
        "paddingRight": 100,
        "paddingBottom": 100,
        "paddingLeft": 100,
        "backgroundColor": "#282828"
    }
});