//Function to contacenate a whole sentence from many smaller sections
function full_sentence() {
    X = "This is the ";
    Y = "first section of ";
    Z = "this sentence.";
    Whole = X.concat(Y, Z);
    document.getElementById("concatenate").innerHTML = Whole;
}

//Function to slice a section of a string and dispaly it in the HTML
function slice_function() {
    Sentence = "This is the first section of this sentence.";
    Section = Sentence.slice(12,17);
    document.getElementById("slice").innerHTML = Section;
}

//using touppercase() string method:
function uppercase_function() {
    TextA = "first";
    TextAupper = TextA.toUpperCase();
    document.getElementById("upper").innerHTML = TextAupper;
}

//using the search() string method:
function search_function() {
    Sentence = "This is the first section of this sentence.";
    FirstPosition = Sentence.search("first");
    document.getElementById("search").innerHTML = FirstPosition;
}

//Using the toString() number method
Number1 = 124.124568
document.write("Let's return a number as a string: " + Number1.toString() + "<br>");

//Using the toPrecision method()
document.write("Let's return only the first 5 digits " + Number1.toPrecision(5) + "<br>");
