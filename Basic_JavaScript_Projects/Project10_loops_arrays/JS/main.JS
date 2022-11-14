//Using a while loop to count to ten
function count_to_ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("counting_to_ten").innerHTML = Digit;
}

//Using the length property
Y = "How long is this string?";
document.getElementById("length").innerHTML = "Using the length property: " + Y.length;

//Using a For Loop to display instrument names from an array
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = Content;
}

//Using an array in a function
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}