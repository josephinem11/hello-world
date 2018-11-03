var slidesIndex=0;
showSlides();

function showSlides() {
    
    var slides= document.getElementsByClassName("myimages");
}

function showSlides () {

    var slides = document.getElementsByClassName("myimages");
    for (var i=0; i<slides.length; i++){
        slides [i].style.display= "none"; 
    }
    slidesIndex++;
    if (slidesIndex >= slides.length){
        slidesIndex=0
    }
    slides[slidesIndex].style.display="block"
    setTimeout(showSlides, 4000);
    }
    