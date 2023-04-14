// Function that returns result of an addition operation

function addition_func() {
    var addition = 4 + 4;
    document.getElementById("math_add").innerHTML = "4 + 4 = " + addition;
}

// Function that returns result of an subtraction operation

function subtraction_func() {
    var subtraction = 4 - 2;
    document.getElementById("math_sub").innerHTML ="4 - 2 = " + subtraction;
}

// Function that returns result of a multiplication operation

function multiplication_func() {
    var multiplication = 4 * 2;
    document.getElementById("math_multi").innerHTML = "4 * 2 = " + multiplication;
}

// Function that returns result of a division operation

function division_func() {
    var division = 4 / 2;
    document.getElementById("math_div").innerHTML = "4 / 2 = " + division;
}

// Function that returns result of a more than one operation (add,sub,div,mult)

function moremath_func() {
    var simple_math = (4 + 4) * 16 / 4 -3;
    document.getElementById("math_more").innerHTML = "(4 + 4) * 16 / 4 -3 = " + simple_math;
}

// Function that return result of a division with a remainder/MODULUS

function modulus_func() {
    var modulus_div = (29 / 8); // division that gives the total answer
    var modulus_answer = 29 % 8; // gives the remainder
    document.getElementById("math_modulus").innerHTML = "29 / 8 = " + modulus_div + " <br>29 / 8 has a remainder of: " + modulus_answer;
}

// Function that return result of a unary operator called "negation operator"
// this returns the opposite or negative form of something

function unary_func() {
    var negation_x = 10;
    document.getElementById("math_unary").innerHTML = "The opposite or negative form of 10 is : " + -negation_x;
    // The syntax "negation_x" is followed with a negative symbol "-"
}

// Function that returns results of a increment(increase) or decrement(decrease) to a number
// INCREMENT
function increment_func() {
    var x = 8;
    x++;
    document.getElementById("math_increment").innerHTML = "The increment of 8 would be: " + x;
}

// DECREMENT
function decrement_func() {
    var x = 8.25;
    x--;
    document.getElementById("math_decrement").innerHTML = "The decrement of 8.25 would be: " + x;
}

// Function that returns result of a random generated number from "x" range, in this case the range is 0-100
function random_func () {
    var x= (Math.random() *100);
    document.getElementById("math_random").innerHTML = "A random number from 0 - 100: " + x;
}
// Function that returns result of a random generated number that is an INTEGER (WHOLE NUMBER) from "x" range, in this case the range is 0-100

function random_int_func () {
    var x = Math.floor(Math.random() *100);
    document.getElementById("math_random_int").innerHTML = "A random whole number from 0 - 100: " + x;
}

// Function that returns result of a decimal number that has been rounded

function object_func () {
    var x = Math.round(5.7);
    document.getElementById("math_object").innerHTML = "When 5.7 is rounded is becomes: " + x;
}