function my_Dictionary() {  //Define and label a function called my Dictionary
    var Animal = {          //creating key value pairs under the variable Animal
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;    //deleting a key value pair
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //Putting the value .sound of the variable Animal into the HTML element, should return "undefined
    document.getElementById("Dictionary2").innerHTML = Animal.Age;  //Putting the value .age of the variable Animal into the HTML element.
}