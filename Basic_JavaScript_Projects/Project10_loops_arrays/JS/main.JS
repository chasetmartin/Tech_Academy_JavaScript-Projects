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

//Function using a constant with properties
function constant_function() {
    const musical_instrument = {type:"guitar", brand:"Fender", color:"black"};
    musical_instrument.color = "red";
    musical_instrument.price = " $800";
    document.getElementById("constant").innerHTML = "The cost of the " + musical_instrument.type + " was" + musical_instrument.price;
}

//Utilizing the let keyword
var A = 64;
document.write("<br>" + "Variable A is " + A);
{
    let A = 45;
    document.write("<br>" + "Except now we used let and A is " + A);
}
document.write("<br>" + "And because we used let, outside of the block A is still " + A);

//Utilizing the return statement
function pi_function() {
    return Math.PI;
}
document.getElementById("pi").innerHTML = pi_function();

//Creating an object that includes properties and a method
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "Red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("car_object").innerHTML = car.description();

//Using a break statement to stop our count to 10 at 8
function count_to_eight() {
    let Digit = "";
    let X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
        if (X == 9) {break;}
    }
    document.getElementById("counting_to_eight").innerHTML = Digit;
}

//Using a continue statement to skip 8 in the count to 10
function count_to_ten_skip8() {
    let Digit = "";
    let X = 0;
    while (X < 10) {
        X++;
        if (X === 8) { continue; }
        Digit += "<br>" + X;
    }
    document.getElementById("counting_to_ten_skip8").innerHTML = Digit;
}

