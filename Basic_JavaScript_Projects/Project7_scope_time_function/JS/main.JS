//Global variable example
var X = 25;
function Add1() {
    document.write(15 + X + "<br>");
}
function Add2() {
    document.write(X + 20 + "<br>");
}
document.write("Two functions using same global variable:" + "<br>");
Add1();
Add2();

//Local variable example
function Add3() {
    Y = 12;
    document.write(10 + Y + "<br>");
}
function Add4() {
    Z = 40;
    document.write(Z + 4 + "<br>");
}
document.write("Two functions using local variables:" + "<br>");
Add3();
Add4();

//Functions with global variable error to debug in console:
function Add5() {
    var A = 20;
    document.write(A + 6 + "<br>");
}
function Add6() {
    console.log(A - 4 + "<br>");
}
document.write("Two functions, the second does not have access to local variable A, will return an error to diagnose in console:" + "<br>");
Add5();
Add6();

//If statement in a function using the Date().gethours method
function get_Date() {
    if (new Date().getHours() < 19) {
        document.getElementById("dateifstatement").innerHTML = "It must be before 7pm!";
    }
}

//My own if statement
function date_Again() {
    if (new Date().getMonth() == 10) {
        document.getElementById("mydatestatement").innerHTML = "It must be November!";
    }
}

//if/else statement in a function to determine if the user age input is old enough to vote
function age_Function() {
    Age = document.getElementById("age").value;
    if (Age >= 18) {
        Mess = "Congrats, you're old enough to vote!";
    }
    else {
        Mess = "Sorry, you're not old enough to vote!";
    }
    document.getElementById("how_old?").innerHTML = Mess;
}

//Else if statement in a function to give the time of day:
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if(Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}