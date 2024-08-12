enum Color{
    Red=1,
    Green,
    Blue
}

function getColor(color:Color):number|string{
   switch(color){
     case Color.Red:
        return Color.Red
     case Color.Green:
        return Color.Green
     case Color.Blue:
        return Color.Blue
        default:
            return "No that color in Enum"
   }
}

console.log(getColor(Color.Green))