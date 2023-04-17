// Typeof Operator

document.write (typeof "Food"); //"string" output
document.write("<br>") //add breaks so it's not bunched up all together
document.write (typeof 5); //"number" output

// Type Coercion
function coercion_func() {
    var x = ("10" + 3);
    document.getElementById("paragraph").innerHTML = "The coercion of a \"string\" \"10\" + a \"number\" 3 is = " + x;
}

// Displaying NaN (Not a Number)
function nan_func() {
    var x = (0/0);
    var true_nan = isNaN("string");
    var false_nan = isNaN(5);

    document.getElementById("nan_p1").innerHTML = "0 divided 0 is: "+ x;
    document.getElementById("nan_p2").innerHTML = "is \"string\" Nan? " + true_nan; 
    document.getElementById("nan_p3").innerHTML = "is 5 Nan? " + false_nan;
}


// Postive Infinity and Negative Infinity
document.write("<br>");
document.write (2E310) ; // returns "infinity"
document.write("<br>");
document.write (-2E310); // returns "-infinity"
document.write("<br>");

// Boolean (TRUE OR FALSE)
document.write (2<10); // returns "True"
document.write("<br>");
document.write (2>10); // returns "False"
document.write("<br>");

// Console Log
console.log (2+5); //This result of 7 will show up in the browser console
                   // Pressing F12 while on the browser and a window called "Console" on the top left will appear (Google Chrome)

console.log (3>16); // Displaying "false" in the sonsole using boolean

// == Comparisons (T/F)
document.write(4==4); // results "true"
document.write("<br>");
document.write (4==8); // results "false"
document.write("<br>");

/// === Triple equal sign Comparision
x = 10;
y = 10;
c = "10";

document.write(x===y); //result "true"
document.write("<br>"); 
document.write (x===c); //result "false"
document.write("<br>");

// AND(&&) Operator T/F
document.write (10>3 && 2<5); // results will be "true" because both of the left and right are true
document.write("<br>");
document.write (10<3 && 2<5); // results is "false" because even though right side remains the same, the left is false
document.write("<br>");

// OR(||) Operator
document.write (10>3 || 2>5); // results "true"; even though the right side is false the answer will still be true
document.write("<br>");
document.write (10<3 || 2>5) /// results "false"; because both letf and right are false
document.write("<br>");

// NOT(!) Operator
function not_func() {
    document.getElementById("not_operator").innerHTML = !(10>3); // result "false"; becuase the answer is true
    document.getElementById("not_operator").innerHTML = "false --- "+!(3>10); // results "true"; because answer is false
}