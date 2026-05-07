const cards = document.querySelectorAll(".card");

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      cardObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5,
});

cards.forEach((card) => cardObserver.observe(card));