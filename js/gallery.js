document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".gallery-grid img").forEach((image) => {
    image.addEventListener("click", () => window.open(image.src, "_blank", "noopener"));
  });
});
