// Animal Functions / Data Attribute
function display_func(animals) {
    var animalclass = animals.getAttribute("data-animal-class");
    alert (animalclass + " is a " + animals.innerHTML + " !!! ")
}