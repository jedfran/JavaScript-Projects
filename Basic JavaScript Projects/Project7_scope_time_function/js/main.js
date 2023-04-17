//----------------------------------------------------------------------//
// Global Variable
var x = 5; //outside the function therefore we could use "x" for the whole javascript
function global_add_1() {
    document.write(5+x+"<br>");
}
global_add_1();

// Local Variable
function local_add_1 () {
    var y = 2; // for the console log below (don't worry about this)
    var x = 20; //this "x" can only be used inside this function, this also overwrites the global "x" above
    document.write(5 + x + "<br>")
}
local_add_1();

// console.log Error
function error_add_1() {
    document.write(2 + y + "<br>") //used y from above (local variable), which cannot be used!
    console.log(2 + y + "<br>") // rewrote code with console.log to see "Console" in browser for Error
                                // it says "y" is not defined
}
error_add_1();

//----------------------------------------------------------------------//
// If statements using Date().getHours()
function greeting_func() {
    if (new Date().getHours() <= 16) {
    document.getElementById("greet").innerHTML = "Hello it is before or is 4PM!"; //this text will appear if the <p> element
    }                                                                       // is clicked before 4PM
    else {
    document.getElementById("greet").innerHTML = "It is currently past 4PM!" //this text will appear if the <p> element
                                                                             //is clicked after 4PM
    }
         
}
//----------------------------------------------------------------------//
//Renting a car Function / If and Else Statements
function rent_func() {
    var age = document.getElementById("age").value;
    if (age >= 25 ){ // if age is either 25 or higher, they are allowed to rent a car
        var rent = "You are ALLOWED to rent a car!"
    }
    else {
        var rent = "You are NOT allowed to rent a car!"
    }
    document.getElementById("message").innerHTML = rent;
}

//----------------------------------------------------------------------//
// Else If Statements -- Hungry Function
function hungry_func() {
    var hungry = document.getElementById("hungry").value;
    let UPPER_hungry = hungry.toUpperCase(); // This changes the answer to ALL UPPER CASE so that however they spell "YES" or "NO"
                                             // it will be acceppted, wether is spelled "yEs" or "nO"
    if (UPPER_hungry == "YES") { // the UPPER_hungry is all upper case so the == should be "YES" to work
        var message_hungry = "You are hungry, EAT!"
    } 
    else if (UPPER_hungry == "NO") {
        var message_hungry = "You are not hungry, thirsty? DRINK"
    }
    else {
        var message_hungry = "You are neither hungry or thirsty. REST"
    }
    document.getElementById("are_you_hungry").innerHTML = message_hungry;
}

//----------------------------------------------------------------------//