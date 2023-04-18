// Countdown timer 
function countdown_func() {
    var seconds = document.getElementById("seconds").value;

    function tick() {   // nested function, -1 from user's number input
        seconds = seconds - 1; 
        timer.innerHTML = seconds; // changes the paragraph element to show whatever the seconds are
        var time = setTimeout(tick, 1000); //this means the program is pausing for 1,000 milliseconds AKA 1 second
        if (seconds == -1) { // IF timer hits '-1' everything underneath runs
            alert ("TIME IS UP!"); //window pops out saying "TIME IS UP"
            clearTimeout(time); //Resets time to 0
            timer.innerHTML= ""; //resets the paragraph element to be blank
        }
    }
    tick();
}