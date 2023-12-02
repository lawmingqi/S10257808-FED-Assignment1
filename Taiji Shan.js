//function for enlarge image upon hover
function addImageHoverEffect(selector) {
    const image = document.querySelector(selector);
    let originalTransform;

    image.addEventListener('mouseenter', function() {
        originalTransform = this.style.transform;
        this.style.transform = 'scale(1.2)'; 
    });

    image.addEventListener('mouseleave', function() {
        this.style.transform = originalTransform || 'none';
    });
}

addImageHoverEffect('.enlarge1');
addImageHoverEffect('.enlarge2');
addImageHoverEffect('.enlarge3');

