// animasi kecil saat scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card, .project-card, .skill").forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
