// Get lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Function to open the lightbox
function openLightbox(src) {
    lightbox.style.display = 'flex'; // Use flex to center the image
    lightboxImg.src = src;
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

    