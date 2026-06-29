document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector("#loadingScreen");
  if (loader) {
    window.setTimeout(() => loader.classList.add("hidden"), 250);
  }

  document.querySelectorAll(".nav-icons .icon-btn").forEach((button, index) => {
    const labels = ["Search", "Wishlist", "Cart", "Toggle dark mode"];
    const symbols = ["⌕", "♡", "Bag", "☼"];
    button.setAttribute("aria-label", button.getAttribute("aria-label") || labels[index] || "Action");
    if (symbols[index]) button.textContent = symbols[index];
  });

  document.querySelectorAll(".meta-row span:first-child").forEach((node) => {
    if (!node.classList.contains("stars")) {
      node.classList.add("stars");
      node.textContent = "★★★★★";
    }
  });

  document.querySelectorAll(".site-footer p").forEach((node) => {
    node.textContent = node.textContent.replace("Â©", "©");
  });

  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle?.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  const themeToggle = document.querySelector(".theme-toggle");
  themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☾" : "☼";
  });

  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    window.addEventListener("scroll", () => {
      scrollTop.classList.toggle("visible", window.scrollY > 500);
    });
    scrollTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      document.querySelectorAll("[data-category]").forEach((card) => {
        card.style.display = filter === "all" || card.dataset.category === filter ? "" : "none";
      });
    });
  });
});
