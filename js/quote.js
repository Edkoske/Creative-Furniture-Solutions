document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button");
      if (!button) return;
      const original = button.textContent;
      button.textContent = "Sent";
      window.setTimeout(() => (button.textContent = original), 1800);
      form.reset();
    });
  });
});
