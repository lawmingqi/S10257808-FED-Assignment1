
//video
//Selects all elements with the class name 'video-container'.
const videoContainers = document.querySelectorAll('.video-container'); 

videoContainers.forEach(container => {
    const thumbnail = container.querySelector('.image');
    const video = container.querySelector('.video');

    //variable is declared to store the timeout ID for the play action.
    let playTimer;

    container.addEventListener('mouseenter', function() {
        thumbnail.style.display = 'none'; 
        video.style.display = 'block';

        const startTime = 27;
        video.currentTime = startTime; // Set the video to start at the specified time

        video.muted = true;
        video.play(); // Play the video on hover from the specified time

        playTimer = setTimeout(() => {
            video.pause(); // Pause the video after 7.7 seconds
        }, 7700); 
    });


    container.addEventListener('mouseleave', function() {
        clearTimeout(playTimer); // Clear the timer if mouse leaves before 7.7 seconds
        thumbnail.style.display = 'block'; //display thumbnail
        video.style.display = 'none'; // hides the video
        video.currentTime = 0; // reset video to the beginning
        video.pause(); 
    });
});


// Slideshow for .topslide
function startSlideshow1(slideshow) {
    let slideIndex = 0;

    function showSlides() {
        const slides = slideshow.querySelectorAll('.topslide');

        //loop through all elements with class 'topslide'
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none'; //hide all slides
        }

        slideIndex++; //increment slide to move to the next picture

        if (slideIndex > slides.length) {
            slideIndex = 1; //reset to first slide
        }

        slides[slideIndex - 1].style.display = 'block'; 

        setTimeout(showSlides, 1500); //call showSlides recursively, 1.5secs delay
    }

    showSlides(); //call slideshow
}



//slideshow for routine 3&4
const slideshowContainers = document.querySelectorAll('.slideshow-container'); //selecting slideshow containers
startSlideshow1(slideshowContainers[0]); 


function startSlideshow(slideshow) {
    let slideIndex = 0;
    const slides = slideshow.querySelectorAll('.slides img');
  
    function showSlides() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'; //hides all slides
      }
  
      slideIndex++;
  
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
  
      slides[slideIndex - 1].style.display = 'block'; //display the current slide
  
      setTimeout(showSlides, 2000); //set a timeout to call function after 2secs
    }
  
    showSlides(); //call slideshow
  }
  
  //start routine3 slideshow
  const slideshowContainer1 = document.querySelector('.routine3 .slideshow-container');
  startSlideshow(slideshowContainer1);
  
  //satrt routine4 slideshow
  const slideshowContainer2 = document.querySelector('.routine4 .slideshow-container');
  startSlideshow(slideshowContainer2);
  
 