const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

// Open lightbox when thumbnail clicked
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    // Get full-size image URL by removing "-thumbnail"
    const fullSrc = item.src.replace('-thumbnail', '');
    lightboxImage.src = fullSrc;

    // Show lightbox
    lightbox.style.display = 'flex';
  });
});

// Close lightbox when clicking close button or background
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  // Prevent closing when clicking the image itself
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
