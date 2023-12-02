

function startSlideshow(slideshow) {
    let slideIndex = 0;
    const slides = slideshow.querySelectorAll('.slides img');

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

        slideIndex++;

        if (slideIndex > slides.length) {
        slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = 'block';

        setTimeout(showSlides, 1500);
    }

    showSlides();
}
  
// Call slideshow function
const slideshowContainer1 = document.querySelector('.slideshow-container');
startSlideshow(slideshowContainer1);
const slideshowContainer2 = document.querySelector('.jjbSlide .slides');
startSlideshow(slideshowContainer2);

