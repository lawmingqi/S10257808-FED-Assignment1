

//video
const videoContainers = document.querySelectorAll('.video-container');

videoContainers.forEach(container => {
    const thumbnail = container.querySelector('.image');
    const video = container.querySelector('.video');
    let playTimer;

    container.addEventListener('mouseenter', function() {
        thumbnail.style.display = 'none'; 
        video.style.display = 'block';

        const startTime = 27;
        video.currentTime = startTime; // Set the video to start at the specified time

        video.muted = true; // Mute the video to comply with browser policies
        video.play(); // Play the video on hover from the specified time

        playTimer = setTimeout(() => {
            video.pause(); // Pause the video after 8 seconds
        }, 7700); // 8000 milliseconds = 8 seconds
    });

    container.addEventListener('mouseleave', function() {
        clearTimeout(playTimer); // Clear the timer if mouse leaves before 8 seconds
        thumbnail.style.display = 'block'; // Show the thumbnail image on mouse leave
        video.style.display = 'none'; // Hide the video on mouse leave
        video.currentTime = 0; // Reset the video to the beginning
        video.pause(); // Pause the video on mouse leave
    });
});


// Slideshow for top part
function startSlideshow1(slideshow) {
    let slideIndex = 0;

    function showSlides() {
        const slides = slideshow.querySelectorAll('.topslide');

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = 'block';

        setTimeout(showSlides, 1800);
    }

    showSlides();
}

//slideshow for routine 3&4
const slideshowContainers = document.querySelectorAll('.slideshow-container');
startSlideshow1(slideshowContainers[0]); // Start the first slideshow


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
  
  // Start first slideshow
  const slideshowContainer1 = document.querySelector('.routine3 .slideshow-container');
  startSlideshow(slideshowContainer1);
  
  // Start second slideshow
  const slideshowContainer2 = document.querySelector('.routine4 .slideshow-container');
  startSlideshow(slideshowContainer2);
  