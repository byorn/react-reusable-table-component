import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "table": {
        "borderCollapse": "collapse",
        "width": "100%"
    },
    "table tr td": {
        "color": "black"
    },
    "table tr th": {
        "color": "black"
    },
    "th": {
        "textAlign": "left",
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "backgroundColor": "#4CAF50",
        "color": "white"
    },
    "td": {
        "textAlign": "left",
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8
    },
    "tr:nth-child(even)": {
        "backgroundColor": "#f2f2f2"
    }
});