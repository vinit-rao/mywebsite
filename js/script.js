document.addEventListener('DOMContentLoaded', () => {
    const nightSky = document.getElementById('night-sky');
    
    // 1. STAR GENERATOR (Static & Parallax)
    if (nightSky) {
        nightSky.innerHTML = '';
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            const size = Math.random() * 2 + 0.5;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.opacity = Math.random();
            nightSky.appendChild(star);
        }

        // 2. SHOOTING STAR GENERATOR
        setInterval(() => {
            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star';
            shootingStar.style.left = `${Math.random() * 100}%`;
            shootingStar.style.top = `${Math.random() * 30}%`;
            nightSky.appendChild(shootingStar);
            
            setTimeout(() => shootingStar.remove(), 2500);
        }, 4000); 
    }

    // 3. COLOR SHIFT & PARALLAX
    const heroTitle = document.querySelector('.hero-title');
    const nameOverlay = document.querySelector('.hero-text-overlay');
    const bioOverlay = document.querySelector('.hero-bio');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        if (nightSky) {
            nightSky.style.transform = `translateY(${scrolled * 0.1}px)`;
        }

        // Parallax only on large screens
        if (window.innerWidth > 1024) {
            const yOffset = scrolled * 0.2;
            if (nameOverlay) nameOverlay.style.transform = `translateY(${yOffset}px)`;
            if (bioOverlay) bioOverlay.style.transform = `translateY(${yOffset}px)`;
        }

        // Hero title color shift
        if (heroTitle) {
            if (scrolled > 400) heroTitle.classList.add('active-color');
            else heroTitle.classList.remove('active-color');
        }
    });
});