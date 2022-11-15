//function using a switch statement
function color_function() {
    var color_output;
    var colors = document.getElementById("color_input").value;
    var color_string = " is a great color!";
    switch(colors) {
        case "Red":
            color_output = "Red" + color_string;
            break;
        case "Yellow":
            color_output = "Yellow" + color_string;
            break;
        case "Green":
            color_output = "Green" + color_string;
            break;
        case "Blue":
            color_output = "Blue" + color_string;
            break;
        case "Pink":
            color_output = "Pink" + color_string;
            break;
        case "Purple":
            color_output = "Purple" + color_string;
            break;
            default:
            color_output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = color_output;
}

//function using the getElementsByClassName method
function click_function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//drawing a circle within the canvas
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(300, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
