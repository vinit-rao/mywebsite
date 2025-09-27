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

particlesJS('particles-js', {
  particles: {
    number: {
      value: 1, // Number of particles
      density: {
        enable: true,
        value_area: 200 // Density area
      }
    },
    color: {
      value: '#252525' // Color of particles
    },
    shape: {
      type: 'triangle', // Shape of particles
      stroke: {
        width: 1,
        color: '#b20000'
      }
    },
    opacity: {
      value: 0.5, // Opacity of particles
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1
      }
    },
    size: {
      value: 10, // Size of particles
      anim: {
        enable: true,
        speed: 40,
        size_min: 0.1
      }
    },
    line_linked: {
      enable: true,
      distance: 150, // Link particles at this distance
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 30,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out'
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      }
    }
  },
  retina_detect: true
});

