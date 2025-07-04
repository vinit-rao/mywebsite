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
      popupImage.src = card.querySelector('img').src;
      popupImage.alt = card.querySelector('img').alt;

      popup.classList.remove('hidden');
      popup.classList.add('show');
    });
  });

  popupClose.addEventListener('click', () => {
    popup.classList.add('hidden');
    popup.classList.remove('show');
  });

  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.add('hidden');
      popup.classList.remove('show');
    }
  });
});
