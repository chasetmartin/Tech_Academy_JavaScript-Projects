function addition_Function() {              //Defining a function and naming it
    var addition = 4 + 5;    //Defining the variable addition and giving it two numbers with the addition operator
    document.getElementById("Math").innerHTML = addition; //Putting the value of the variable addition into the HTML element with id "Math"
}

function subtraction_Function() {           //Defining a function and naming it
    var subtraction = 5 - 2;                //Defining the variable subtraction and giving it two numbers with the subtraction operator.
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction; //Putting the value of subtraction into the HTML element
}

function multiplication() {                 //Defining a function and naming it
    var multiplication = 6 * 8;             //Defining the variable multiplication and giving it two numbers with the multiplicaion operator.
    document.getElementById("Math3").innerHTML = "6 x 8 = " + multiplication; //Putting the value of multiplication into the HTML element.
}

function division() {                       //Defining a function and naming it
    var division = 48 / 6;                  //Defining the variable division and giving it two numbers with the division operator.
    document.getElementById("Math4").innerHTML = "48 / 6 = " + division; //Putting the value of division into the HTML element.
}

function more_Math() {                      //Defining a function and naming it
    var simple_Math = (1 + 2) * 10 / 2 - 5; //Defining the variable Simple_math and giving it multiple operations.
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math //Putting the results of simple_Math into the HTML element
}

function modulus_Operator() {               //Defining a function and naming it
    var modulus_Math = 25 % 6;              //Defining the modulus math variable and giving it two numbers with the modulus operator.
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus_Math; //Putting the results of modulus_Math into the HTML element.
}

function negation_Operator() {              //Defining a function and naming it
    var x = 10;                             //Defining a variable x
    document.getElementById("Math7").innerHTML = -x; //Using the negation operator when x is returned to the HTML element
}

function increment_Operator() {             //Defining a function and naming it
    var X = 5;                              //Defining a varible
    X++;                                    //Using the increment operator
    document.getElementById("Math8").innerHTML = X; //Putting the value of X into the HTML element.
}

function decrement_Operator() {             //Defining a function and naming it
    var Y = 5.25;                           //Defiing a variable
    Y--;                                    //Using the decrement operator
    document.getElementById("Math9").innerHTML = Y; //Putting the value of Y into the HTML element

}

window.alert("Random number from 0 - 100: " + Math.random() * 100); //Using the random number method

document.write("Using Math operator, square root of 64: " + Math.sqrt(64)); //Using the math object method