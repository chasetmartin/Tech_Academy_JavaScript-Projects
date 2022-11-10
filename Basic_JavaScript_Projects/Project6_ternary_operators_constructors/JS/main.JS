//Example ternary operator function, ternary operator can be found in Can_Ride variable
function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

//My own ternary operator function regarding voting age:
function vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age >= 18) ? "You are old enough":"You are too young";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote!";
}

//Oject constructor function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//Creating new instances of the Vehicle object using the constructor function
var Jack = new Vehicle("Dodge", "Viper", 202, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//A function to use the newly constructed objects for display in HTML
function myFunction() {
    document.getElementById("new_and_this").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//my own object constructor function:
function Human(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

//A Nested Function (Plus_one is the nested function)
function count_Function() {
    document.getElementById("nested_function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}