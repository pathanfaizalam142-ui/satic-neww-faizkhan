const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "translateY(-1rem)";

});

card.addEventListener("mouseleave", () => {

card.style.transform = "translateY(0)";

});

});