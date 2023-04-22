// Validation Function
function validate_func() {
    var fname = document.forms["myForm"] ["fname"].value; // First name Input
    var lname = document.forms ["myForm"] ["lname"].value; // Last name Input
    var pnumber = document.forms ["myForm"] ["pnumber"].value; // Phone Number Input

    if (fname == "" || lname == ""  || pnumber == "") { // If any of the Input Elements are left blank an alert will pop up
        alert ("Please fill out ALL the information."); // ALERT 
    }

}   