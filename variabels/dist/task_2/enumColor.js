"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
function getColor(color) {
    switch (color) {
        case Color.Red:
            return Color.Red;
        case Color.Green:
            return Color.Green;
        case Color.Blue:
            return Color.Blue;
        default:
            return "No that color in Enum";
    }
}
console.log(getColor(Color.Green));
