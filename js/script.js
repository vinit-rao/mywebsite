// Particles.js config
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 30 },
    "color": { "value": "#ffcc00" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 5 },
    "move": { "speed": 5 }
  }
});

document.getElementById("themeToggle").addEventListener("click", () => {
  const html = document.documentElement;
  html.setAttribute("data-theme", html.dataset.theme === "dark" ? "light" : "dark");

});