//Photo gallery script 

const slideshowIndices = {
    1: 0,  
    2: 0   
};


function changeSlide(slideshowNum, direction) {
    const slides = document.querySelectorAll(`#slideshow${slideshowNum} .slide`);
    const currentIndex = slideshowIndices[slideshowNum];


    slides[currentIndex].style.display = 'none';


    let newIndex = currentIndex + direction;


    if (newIndex >= slides.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = slides.length - 1;
    }


    slideshowIndices[slideshowNum] = newIndex;


    slides[newIndex].style.display = 'block';
}



