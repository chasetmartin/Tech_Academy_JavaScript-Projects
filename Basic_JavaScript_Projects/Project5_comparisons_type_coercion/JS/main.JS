document.write(typeof "Text"); //using typeof operator
document.write("<br>");
document.write(typeof 8); //using typeof operator
document.write("<br>");
document.write("20" + 10); //Using type coercion

function nan_Function() { //Function to return Not a Number in the HTML element
    document.getElementById("NaN").innerHTML = 0/0; 
}

function truenan_Function() { //Function to use the isNaN operator to return TRUE in the HTML element (since it's a string)
    document.getElementById("true").innerHTML = isNaN("This is a string");
}

function falsenan_Function() { //Function to use the isNaN operator to return FALSE in the HTML element (since it's a number)
    document.getElementById("false").innerHTML = isNaN("020");
}

function infinity_Function() { //Function to display infinity in the HTML element
    document.getElementById("infinity").innerHTML = 4.2E312;
}

function neginfinity_Function() { //Function to diplay negative infinity in the HTML element
    document.getElementById("neginfinity").innerHTML = -4.2E312;
}

function boolean_Function() { //Function using boolean logic (greater than)
    document.getElementById("boolean").innerHTML = 6 > 5;
}

console.log(2 + 2); //Displaying a result in the console
console.log(6 < 5); //Displaying FALSE in the console using boolean logic

function doubleequal_Function() { //Function using the comparison logical operator
    document.getElementById("doubleequal").innerHTML = 10 == 12;
}

document.write("<br>"); //The following 4 write methods are using the triple equals sign comparsion to check data type and value
document.write("=== same data type and value: " + (10 === 10));
document.write("<br>");
document.write("=== different data type and value: " + ("ten" === 10));
document.write("<br>");
document.write("=== different data type but same value: " + ("10" === 10));
document.write("<br>");
document.write("=== same data type, different value: " + (12 === 10));
document.write("<br>");
                        //The folloing 6 write commands are using the AND, OR, and NOT operators to make comparison and dispaly TRUE or FALSE
document.write("Using the AND logical operator to display true: " + (12 > 2 && 8 < 10));
document.write("<br>");
document.write("Using the AND logical operator to display false: " + (12 < 2 && 8 < 10));
document.write("<br>");
document.write("Using the OR logical operator to display true: " + (12 > 2 || 8 > 10));
document.write("<br>");
document.write("Using the OR logical operator to display false: " + (12 < 2 && 8 > 10));
document.write("<br>");
document.write("Using the NOT logical operator to display true: " + (!(12 < 10)));
document.write("<br>");
document.write("Using the NOT logical operator to display false: " + (!(10 < 12)));
