document.addEventListener('DOMContentLoaded', () => {
    const nightSky = document.getElementById('night-sky');
    const heroTitle = document.querySelector('.hero-title');
    const nameOverlay = document.querySelector('.hero-text-overlay');
    const bioOverlay = document.querySelector('.hero-bio');

    if (nightSky) {
        nightSky.innerHTML = '';
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            const size = Math.random() * 2 + 0.5;
            Object.assign(star.style, { left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: `${size}px`, height: `${size}px`, opacity: Math.random(), position: 'absolute' });
            star.className = 'star';
            nightSky.appendChild(star);
        }

        setInterval(() => {
            const ss = document.createElement('div');
            ss.className = 'shooting-star';
            // Start from the right side of the screen to fly toward the left
            Object.assign(ss.style, { 
                left: `${Math.random() * 50 + 50}%`, 
                top: `${Math.random() * 40}%` 
            });
            nightSky.appendChild(ss);
            setTimeout(() => ss.remove(), 2100);
        }, 1000);
    }

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (nightSky) nightSky.style.transform = `translateY(${scrolled * 0.1}px)`;
        if (window.innerWidth > 1024) {
            const y = scrolled * 0.2;
            if (nameOverlay) nameOverlay.style.transform = `translateY(${y}px)`;
            if (bioOverlay) bioOverlay.style.transform = `translateY(${y}px)`;
        }
        if (heroTitle) heroTitle.classList.toggle('active-color', scrolled > 400);
    });
});