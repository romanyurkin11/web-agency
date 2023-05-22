var previousButton = document.getElementsByClassName('previous_button');
var nextButton = document.getElementsByClassName('next_button');
var slideIndex = 1;
var slides = document.getElementsByClassName('slider__item');


var questionsItems = document.getElementsByClassName('q-menu__item');

for(i=0; i < questionsItems.length; i++){
    questionsItems[i].addEventListener("click", function(){
        for(j=0; j < questionsItems.length-1; j++){
            if(i == j){
                //this.classList.add("active");
                continue;
            }else{
                questionsItems[j].classList.remove('active');
            }
        }
        this.classList.toggle("active");
    });
}



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
    slides[slideIndex-1].classList.add('active');
    console.log(slideIndex);
}


