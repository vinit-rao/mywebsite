document.addEventListener('DOMContentLoaded', () => {
    // --- 1. NIGHT SKY & SHOOTING STARS ---
    const nightSky = document.getElementById('night-sky');
    if (nightSky) {
        nightSky.innerHTML = '';
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            const size = Math.random() * 2 + 0.5;
            Object.assign(star.style, { 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`, 
                width: `${size}px`, 
                height: `${size}px`, 
                opacity: Math.random(), 
                position: 'absolute' 
            });
            star.className = 'star';
            nightSky.appendChild(star);
        }

        setInterval(() => {
            if (document.hidden) return; 

            const ss = document.createElement('div');
            ss.className = 'shooting-star';
            Object.assign(ss.style, { 
                left: `${Math.random() * 50 + 50}%`, 
                top: `${Math.random() * 40}%` 
            });
            nightSky.appendChild(ss);
            setTimeout(() => ss.remove(), 2100);
        }, 700);
    }

    // --- 2. GLOBAL SCROLL PARALLAX & FADES ---
    const heroTitle = document.querySelector('.hero-title');
    const nameOverlay = document.querySelector('.hero-text-overlay');
    const bioOverlay = document.querySelector('.hero-bio');
    const bgGlow = document.getElementById('bg-glow'); 

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        if (bgGlow) {
            let opacity = 1 - ((scrolled - 200) / 500);
            opacity = Math.max(0, Math.min(1, opacity));
            bgGlow.style.opacity = opacity;
        }

        if (nightSky) nightSky.style.transform = `translateY(${scrolled * 0.1}px)`;
        
        if (window.innerWidth > 1024) {
            const textSpeed = scrolled * 0.2;
            if (nameOverlay) nameOverlay.style.transform = `translateY(${textSpeed}px)`;
            if (bioOverlay) bioOverlay.style.transform = `translateY(${textSpeed}px)`;
        }
        if (heroTitle) heroTitle.classList.toggle('active-color', scrolled > 400);
    });

    // --- 3. MOBILE HAMBURGER MENU ---
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            
            if(icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.style.overflow = 'hidden'; 
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = ''; 
            }
        });
    }

    // --- 4. ULTIMATE SPLINE 3D OPTIMIZATION ---
    if (window.innerWidth > 1024) {
        const splineContainer = document.getElementById('spline-container');
        if (splineContainer) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = 'https://unpkg.com/@splinetool/viewer@1.12.60/build/spline-viewer.js';
            document.head.appendChild(script);
            splineContainer.innerHTML = '<spline-viewer url="https://prod.spline.design/vyQWyAKaGzlKQJKm/scene.splinecode" loading-reveal="hidden"></spline-viewer>';
        }
    }
});