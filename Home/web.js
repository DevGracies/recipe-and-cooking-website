const searchMeal = () => {
  const searchInput = document.getElementById("searchInput").value;

  if (searchInput.trim() !== "") {
    const apiUrl = `www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;

    fetch(apiUrl)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`Status not  found ${resp.statusText}`);
        }
        return resp.json();
      })
      .then((data) => {
        displayResults(data.meals);
      })
      .catch((error) => {
        console.Error("There was a problem with the fetch operation:", error);
      });
  } else {
    console.log("Enter a meal name");
  }
};
const displayResults = (meals) => {
  const mealResults = document.getElementById("mealResults");
  mealResults.innerHTML = "";

  if (meals) {
    meals.forEach((meal) => {
      const mealDiv = document.createElement("div");
      mealDiv.innerHTML = `<h3>${meal.strMeal}</h3>
                                 <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                                 <p>${meal.strInstructions}</p>`;
      mealResults.appendChild(mealDiv);
    });
  } else {
    mealResults.innerHTML = "No results found.";
  }
};
