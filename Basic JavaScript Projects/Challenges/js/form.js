// Validating a form
// if an input is left blank, give the user an alert

function validateForm() {
    let x = document.forms['form'] ['fname'].value;
    let y = document.forms ['form'] ['lname'].value;
    let z = document.forms ['form'] ['pnumber'].value;
    if (x == "" || y =="" || z == "") {
        alert("Please fill out ALL the blanks below.");
        return false;

    }
}

// Makes the form popup when "FORM" is clicked
function form_popup() {
    document.getElementById("myForm").style.display = "block";
  }
  
// Closes the POPUP when "close" is clicked
function closeForm() {
    document.getElementById("myForm").style.display = "none";
 }

// jQuery SLIDESHOW
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);