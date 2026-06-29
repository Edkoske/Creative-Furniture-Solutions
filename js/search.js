document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector('.icon-btn[aria-label="Search"]');
  searchButton?.addEventListener("click", () => {
    window.location.href = "products.html";
  });
});
