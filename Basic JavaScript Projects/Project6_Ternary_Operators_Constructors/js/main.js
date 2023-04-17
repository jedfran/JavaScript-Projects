// Rollercoaster ride function
function ride_func () {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height<52) ? "You're too short" : "You are tall enough";
    document.getElementById ("ride").innerHTML = can_ride + " to ride.";
}

//------------------------------------------------------------//
// this Keywords Function
function Student(Name,Subject,Grade) {
    this.Student_Name = Name; 
    this.Student_Subject = Subject;
    this.Student_Grade = Grade;
}

//new Keyword
var Duke = new Student ("Duke", "Math", "80%")
var Sarah = new Student ("Sarah", "Geography", "86%")
var Trevor = new Student ("Trevor", "Science", "92%")

// KEYWORDS Function
function new_func() {
    document.getElementById("New_and_This").innerHTML = "Student " + Duke.Student_Name +
    " is a great student reaching a high of " + Duke.Student_Grade + " in " + Duke.Student_Subject

}

//------------------------------------------------------------//
//Nested Functions

function nested_func() {
    document.getElementById("Nested_Function").innerHTML = count();
    function count () {
        var starting_point = 6;
        function plus_two() {starting_point +=2;}
        plus_two();
        return starting_point;
    }

}

//------------------------------------------------------------//