

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

        setTimeout(showSlides, 2400);
    }

    showSlides();
}
  
// Call slideshow function
const slideshowContainer1 = document.querySelector('.slideshow-container');
startSlideshow(slideshowContainer1);




//function for enlarge image upon hover
function addImageHoverEffect(selector) {
    const image = document.querySelector(selector);
    let originalTransform;

    image.addEventListener('mouseenter', function() {
        originalTransform = this.style.transform;
        this.style.transform = 'scale(1.1)'; // Change the scale factor as needed
    });

    image.addEventListener('mouseleave', function() {
        this.style.transform = originalTransform || 'none';
    });
}

// To use the function with a specific class or ID
addImageHoverEffect('.enlarge1');
addImageHoverEffect('.enlarge2');