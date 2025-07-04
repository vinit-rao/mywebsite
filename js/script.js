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
