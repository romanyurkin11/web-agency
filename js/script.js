var previousButton = document.getElementsByClassName('previous_button');
var nextButton = document.getElementsByClassName('next_button');
var slideIndex = 1;
var slides = document.getElementsByClassName('slider__item');


// var plusSlide = (n) => {
//     showSlides(n)
// }

var plusSlide = (num) => {
    for(i = 0; i < slides.length; i++){
        slides[i].classList.remove('active');
    }
    slideIndex += num;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    else if(slideIndex < 1){
        slideIndex = slides.length
    }
    console.log(slideIndex);
    slides[slideIndex-1].classList.add('active');
}
