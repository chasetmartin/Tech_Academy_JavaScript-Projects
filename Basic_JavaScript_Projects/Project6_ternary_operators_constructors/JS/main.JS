function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age >= 18) ? "You are old enough":"You are too young";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote!";
}