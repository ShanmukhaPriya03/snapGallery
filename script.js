const filterButtons = document.querySelectorAll('.filter-btn');
const images = document.querySelectorAll('.gallery .image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

// Filter functionality
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    images.forEach(image => {
      if (filter === 'all' || image.dataset.category === filter) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});

// Lightbox preview
images.forEach(image => {
  image.addEventListener('click', () => {
    lightboxImg.src = image.querySelector('img').src;
    lightbox.style.display = 'flex';
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});