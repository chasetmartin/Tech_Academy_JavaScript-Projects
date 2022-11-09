function addition_Function() {              //Defining a function and naming it
    var addition = 4 + 5;    //Defining the variable addition and giving it two numbers with the addition operator
    document.getElementById("Math").innerHTML = addition; //Putting the value of the variable addition into the HTML element with id "Math"
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() {
    var multiplication = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + multiplication;
}

function division() {
    var division = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + division;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math
}

function modulus_Operator() {
    var modulus_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus_Math;
}