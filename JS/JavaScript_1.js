// COLOR FUNCTION
function color_func() {
    //variables
    var color_output;
    var color_result = document.getElementById("color_input").value;
    var color_string = "You picked ";
    var color = color_result.toUpperCase(); //changes the result to uppercase so how ever user spells the colors it will be allowed


    switch(color) {
        case "RED" :
            color_output = color_string + "RED";
        break;
        case "BLUE":
            color_output = color_string + "BLUE";
        break;
        case "GREEN":
            color_output = color_string + "GREEN";
        break;
        case "YELLOW":
            color_output = color_string + "YELLOW";
        break;
        case "PINK":
            color_output = color_string + "PINK";
        break;

    }
    document.getElementById("output").innerHTML = color_output;

}

// ----------------------------------------------------------- //
// document.getElementsByClassName() Function
function click_func() {
    var x = document.getElementsByClassName("click");
    x[0].innerHTML = "Told you so."; // the 0 takes out the first index in the class 'click'
}

// ----------------------------------------------------------- //
//Canvas Properties
//Gradient
var c = document.getElementById("first_canvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient (20,  0 ,400, 0); // (left, top, right, bottom)
grd.addColorStop  (0, "black"); // 0 and 1 is the opacity, to add color and where to position the colors
grd.addColorStop (1, "white");

ctx.fillStyle = grd;
ctx.fillRect (20, 20, 500, 160); // (left, top, right, bottom)