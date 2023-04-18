// Concatenate Function
function concat_func() {
    var sen_1 = "This "; // created variables to show example
    var sen_2 = "is a ";
    var sen_3 = "complete ";
    var sen_4 = "sentence.";
    var whole_sen = sen_1.concat(sen_2,sen_3,sen_4); //used '.concat' to merge the 4 strings together to make a complete sentence
    document.getElementById("concatenate").innerHTML = whole_sen; //used the variable 'whole_sen' for the completed merge
}
// --------------------------------------------------------------------- //
//Slice Method slice()
function slice_func() {
    var sentence = "The Quick Brown Fox jumped over the Lazy Dog";
    var animal_answer = sentence.slice(10,19); //The range of 'Brown Fox' copies it, REMEMBER count starting from 0.
    document.getElementById("slice").innerHTML = "The " + animal_answer;
}
// -------------------------------------------------------------------- //
// search() Method
function search_func() {
    var sentence = "The Quick Brown Fox jumped over the Lazy Dog";
    var search_dog = sentence.search("Dog");
    document.getElementById("search").innerHTML = search_dog;
}


// -------------------------------------------------------------------- //
//toUpperCase Method
function upper_func() {
    var sentence = "click me to upper case"; //the sentence in the paragraph element
    var sen_upper = sentence.toUpperCase(); //making it all UPPERCASE 
    document.getElementById("upper").innerHTML = sen_upper;
}
// -------------------------------------------------------------------- //
// Turning 'number' to a 'string'
function string_func() {
    var x = 72;
    document.getElementById("to_string").innerHTML = x.toString(); // turns the 'number' 72 into a 'string'
}
// -------------------------------------------------------------------- //
// toPrecision() method, formats numbers to a specific length
function precision_func() {
    var x = 1032.874312;
    document.getElementById("precision").innerHTML = "Turn 1032.874312 to only 2 decimal numbers: " + x.toPrecision(6); // the 6 specifies how many numbers show up
}

// -------------------------------------------------------------------- //
//toFixed() method,
function fixed_func() {
    var x = 213.658923;
    document.getElementById("fixed").innerHTML = "Round 213.658923 to the 3rd decimal: " + x.toFixed(3) // toFixed changes the number into a string and the value of '3'
                                                                                                         // is only for the decimal not the number as a whole
}
// -------------------------------------------------------------------- //
//valueOf() method
function valueof_func(){
    var sentence = "Hello";
    document.getElementById("value").innerHTML = sentence.valueOf(); // returns the primivite value of the string
}
// -------------------------------------------------------------------- //