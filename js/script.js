// Back to Top Button Logic
document.addEventListener('DOMContentLoaded', function () {
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('project-popup');
  const popupTitle = document.getElementById('popup-title');
  const popupDescription = document.getElementById('popup-description');
  const popupLink = document.getElementById('popup-link');
  const popupImage = document.getElementById('popup-image');
  const popupClose = document.getElementById('popup-close');

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      popupTitle.textContent = card.dataset.title;
      popupDescription.textContent = card.dataset.description;
      popupLink.href = card.dataset.link;

      // Use popup image if available; otherwise, fall back to the card image
      popupImage.src = card.dataset.popupImage || card.querySelector('img').src;
      popupImage.alt = card.querySelector('img').alt;

      popup.classList.remove('hidden');
      popup.classList.add('show');
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.add('hidden');
      popup.classList.remove('show');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const parallaxElements = document.querySelectorAll('[data-parallax="scroll"]');

  window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
      const speed = 5; // Adjust this to make the effect more or less intense
      const offset = window.pageYOffset;
      const backgroundPosition = 'center ' + (offset * speed) + 'px';
      element.style.backgroundPosition = backgroundPosition;
    });
  });
});


