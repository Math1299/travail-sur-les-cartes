const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    cards.forEach((card) => {
      card.style.filter = "blur(5px)";
    });
  });

  card.addEventListener("mouseleave", () => {
    cards.forEach((card) => {
      card.style.filter = "blur(0)";
    });
  });
});
