
var slideIndex = 1; // set it to 1 so the first image shows up instead of the 3rd one
showSlides(slideIndex);

// Next-Prev Controls
function slide_plus(count) {
    showSlides (slideIndex += count);
}

// Image Control
function currentSlide(count) {
    showSlides(slideIndex=count);
}
function showSlides(count) {
    var car_slide;
    var slides = document.getElementsByClassName("mySlides");
    if (count > slides.length) { // Using the right arrow key
        slideIndex = 1
    }
    if (count < 1) { //Using the left arrow key
        slideIndex = slides.length;
    }
    for (car_slide = 0; car_slide < slides.length; car_slide++) { //looping
      slides[car_slide].style.display = "none"; // if the slide is not present, turn off it's display
    }
    slides[slideIndex-1].style.display = "block"; // -1 makes the index at 0 so it shows the first picture, block displays in the same
                                                  // block as the other pictures.
  }