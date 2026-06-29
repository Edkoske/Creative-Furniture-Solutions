document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button").forEach((button) => {
    if (button.textContent.trim() === "Add to Cart") {
      button.addEventListener("click", () => {
        button.textContent = "Added";
        window.setTimeout(() => (button.textContent = "Add to Cart"), 1200);
      });
    }
  });
});
