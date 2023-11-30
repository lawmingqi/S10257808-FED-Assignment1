function addImageHoverEffect(selector) {
    const image = document.querySelector(selector);
    let originalTransform;

    image.addEventListener('mouseenter', function() {
        originalTransform = this.style.transform;
        this.style.transform = 'scale(1.3)'; // Change the scale factor as needed
    });
    
    image.addEventListener('mouseleave', function() {
        this.style.transform = originalTransform || 'none';
    });
}

// To use the function with a specific class or ID
addImageHoverEffect('.enlarge1');
addImageHoverEffect('.enlarge2');
addImageHoverEffect('.image');


