var color=["green","blue","yellow","red","pink"]
// document.write(color)
alert(color)
console.log(color)
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the
// array 
var first_color=prompt("choice of the first_color")
color.unshift(first_color)
alert(color)
//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
var last_color=prompt("choice of the last_color")
color.push(last_color)
alert(color)
// c. Add two more color to the beginning of the array. Display the updated array in your browser using
var color_1=prompt("Enter your extra color 1")
var color_2=prompt("Enter your extra color 2")
alert(color_1)
alert(color_2)
// d. Delete the first color in the array. Display the updated array in your browser using Alert (All the values
//     should be listed in an alert)
var color=prompt("delete of the first color")
color.push(color)
alert(color)
// Delete the last color in the array. Display the updated array in your browser using Alert.
var color=prompt("delete of the last color")
color.shift(color)
alert(color)
// Ask the user at which index he/she wants to add a color & color name.

var add_color=+prompt("Enter the user at which index")
var color_name=("Enter the user at which index")
color[add_color]=color_name
alert(color)
// g. Ask the user at which index he/she wants to delete color(s) 
var delete_color=+prompt("enter no of color you want to delete")
for(var a=0; a <delete_color;a++){
    var a=prompt("Enter index want to delete ")
    color(a)
}