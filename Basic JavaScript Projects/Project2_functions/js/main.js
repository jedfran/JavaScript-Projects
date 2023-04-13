
// FIRST FUNCTION
function first_function() {
    var first = "MY FIRST FUNCTION"; // Changes the button text to "MY FIRST FUNCTION"
    document.getElementById("Button_Text").innerHTML = first; // On click replaces "CLICK ME!" to "My first function"
    document.getElementById("color_blue").style.color = "blue"; // Changes font color of paragraph element to blue
}

// SECOND FUNCTION
function myFunction() {
    var sentence = " PANDA PANDA PANDA";
    sentence += " GIRAFFE ELEPHANT LION"; // += is used when wanting to concatenate (merge) a string together
    sentence += " TIGER BEAR JAGUAR";
    document.getElementById("concatenate").innerHTML = sentence; // When the paragraph gets clicked the "CLICK ME!!! changes to"
}                                                                // what is in the setence
