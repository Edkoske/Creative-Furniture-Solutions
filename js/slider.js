document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".testimonial-slider");
  if (!slider || slider.children.length > 1) return;

  const testimonials = [
    ["Outstanding craftsmanship, elegant details, and complete professionalism.", "Amara Okafor", "Lagos, Nigeria"],
    ["Our office fit-out was delivered on schedule, with quality that impressed every visitor.", "Daniel Mensah", "Accra, Ghana"],
    ["They understood our brief quickly and produced custom pieces that feel truly refined.", "Nadia Cole", "Abuja, Nigeria"]
  ];

  slider.innerHTML = testimonials
    .map(([quote, name, location], index) => `<article class="testimonial-card${index === 0 ? " active" : ""}"><p>"${quote}"</p><h3>${name}</h3><span>${location}</span></article>`)
    .join("");
});
