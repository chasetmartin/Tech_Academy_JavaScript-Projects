function My_First_Function() {              //Defining a function and naming it
    var str = "this is the button text";    //Defining the variable str and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; //Putting the value of the variable str into the HTML element with id "Button Text"
}

function MyFunction() {                     //Defining and naming MyFunction
    var sentence = "I am learning";         //Defining variable sentence and assigning it a string value
    sentence += " a lot from this book!";   //Concatenating anothing string value onto the sentence variable
    document.getElementById("Concatenate").innerHTML = sentence; //Putting the value of the variable sentence into the HTML element with "Concatenate" id
}