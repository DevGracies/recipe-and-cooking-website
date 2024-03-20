const recipeCards = document.querySelectorAll(".recipe-card");

recipeCard.addEventListener("mouseover", () => {
  recipeCard.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  recipeCard.style.backgroundColor = "#166d3b";
  recipeCard.style.transition = "transform 0.3s";
  recipeCard.style.color = "#fff";
  recipeCard.style.transform = "scale(1.1)";
});

recipeCard.addEventListener("mouseout", () => {
  recipeCard.style.boxShadow = "none";
  recipeCard.style.backgroundColor = "#fff";
  recipeCard.style.color = "#166d3b";
  recipeCard.style.transform = "scale(1)";
});

recipeCards.forEach((recipeCard) => {
  // Add mouseover event listener
  recipeCard.addEventListener("mouseover", function () {
    // Add box shadow, change background color, and text color
    this.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    this.style.backgroundColor = "#007bff";
    this.style.color = "#fff";
  });

  // Add mouseout event listener
  recipeCard.addEventListener("mouseout", function () {
    // Remove box shadow, revert background color, and text color
    this.style.boxShadow = "none";
    this.style.backgroundColor = "#f0f0f0";
    this.style.color = "initial";
  });
});
