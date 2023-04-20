// While loop
function whileloop_func() { 
    var digit = "";
    var count = 1;
    while (count<11) { //while count is less than 11 the loop will keep going
        digit += "<br>" + count; // <br> creates a break everytime the loop goes off,
        count ++; // Evertime this loop occurs, count gets + 1
    }
    document.getElementById("while_loop").innerHTML = digit
}
// -------------------------------------------------------------- //

//String Length Function
function length_func() {
    var MONDAY = "MONDAY";
    document.getElementById("str_length").innerHTML = "What is the string length of MONDAY: " + MONDAY.length;
}

// -------------------------------------------------------------- //

//For loop
function forloop_func() {
    // variables
    var animals = ["Bear", "Ostrich", "Tiger", "Eagle", "Elephant"]; //created a list
    var content = "";
    var count;
    //loop
    for (count = 0; count < animals.length; count++) // animal.length refers to how many items in the list, so count < animals.length looks like 0<5.
    content += animals[count] + "<br>";
    // return to html
    document.getElementById("for_loop").innerHTML = animals.length;    
}
// -------------------------------------------------------------- //

//Array Function
function array_func() {
    var instrument = ["Guitar", "Piano", "Ukulele"];
    document.getElementById("array").innerHTML = "This is instrument is called a " + instrument[2]; 
}
// -------------------------------------------------------------- // 

//Constant Function
function constant_func() {
    const animals = {type:"amphibian", name:"monkey", legs:"2"}; //purposely made "type" to amphibian
    animals.type = "mammal"; //changing the constant animal.type to mammal
    animals.eyes = "2" // added another property
    document.getElementById("constant").innerHTML = "This animal is a " + animals.type + " is called a " + animals.name + 
    " it has " + animals.eyes +" eyes.";
}
// -------------------------------------------------------------- //
// Let Keyword Function
function keyword_func() {
    var y = 32
        {
        let x = 21;
        document.getElementById("let_keyword").innerHTML = y + "<br>" + x;
        }
    // document.getElementById("let_keyword").innerHTML = y + "<br>" + x;
    // if we were to put this here outside the curly brackets, this would not work because 'x' is in its own block scope
    // this is how 'let' keyword works, but the 'var' keyword works throughout the whole function scope
}
// -------------------------------------------------------------- //
//Return Statement
document.getElementById("pi").innerHTML = return_func();
function return_func() {
    return Math.PI;
}
// -------------------------------------------------------------- //
//Object Function / return, let,
let guitars = {
    brand: "Yamaha",
    year: "2023",
    color: "Beige",
    type: "Acoustic",
    description: function() {
        return "This is a " + this.brand + " " +this.color + " " + this.type + " guitar made in " + this.year;  
    }
};
document.getElementById("object").innerHTML = guitars.description();
// -------------------------------------------------------------- //
//Break and Continue Statements
//Break
function break_func() {
    var text = "";
    let count;
     for (count=0; count<11; count++) {
        if (count === 6) {break;} //stops the loop and returns whatever is counted which is the index 6th loop.
        text += " " + count;
     }

     document.getElementById("break_statement").innerHTML = text;
}

//Continue
 function continue_func() {
    let count;
    var text = "";
    for (count=0; count<11; count++) {
        if (count === 6) {continue;} // this skips over one loop which is the index 6th loop.
        text += " " + count;
    }
    document.getElementById("continue_statement").innerHTML = text;
}

// -------------------------------------------------------------- //