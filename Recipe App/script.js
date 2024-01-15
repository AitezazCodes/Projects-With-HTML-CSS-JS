// async function getMealByID(id){
//     const byID = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
//     const rad = await byID.json();
//     console.log(rad);
// }
// getMealByID();

// async function getMealByName(term){
//     const ByName = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
// }

let imageRandom = document.querySelector(".meal-header img");
let hFOUR_Random = document.querySelector(".meal-header h4");
let favBtn = document.querySelector(".fav-btn");
let favMeals = document.querySelector(".fav-meals");

let meals = [
  {
    meal: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Zatoo",
  },
  {
    meal: "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Kiqi natu",
  },
  {
    meal: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Miral",
  },
  {
    meal: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Molyer bawa",
  },
  {
    meal: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Rakaf",
  },
  {
    meal: "https://images.unsplash.com/photo-1600289031464-74d374b64991?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Veggy veggi",
  },
];

function getRandomMeal(meals) {
  let randomSelect = Math.floor(Math.random() * meals.length);
  imageRandom.src = meals[randomSelect].meal;
  hFOUR_Random.textContent = meals[randomSelect].name;

  favMeals.innerHTML = "";
}

getRandomMeal(meals);

favBtn.addEventListener("click", function () {
  favBtn.classList.toggle("active");
  if (favBtn.classList.contains("active")) {
    addFavMeal();
  } else {
    removeFavMeal();
  }
});

function addFavMeal() {
  favMeals.innerHTML = `<li class="fav-item">
  <img
    src="${imageRandom.src}"
    alt=""
  />
  <span>${hFOUR_Random.textContent}</span>
</li>`;

  const existingFavItems = JSON.parse(localStorage.getItem("favItems")) || [];

  existingFavItems.push(favMeals.innerHTML);

  localStorage.setItem("favItems", JSON.stringify(existingFavItems));

  favMeals.innerHTML = existingFavItems.join("");
}

function removeFavMeal() {
  let favItem = document.querySelector(".fav-item");
  if (favItem) {
    favItem.remove();
  }
}

function loadFavItems() {
  const existingFavItems = JSON.parse(localStorage.getItem("favItems")) || [];
  favMeals.innerHTML = existingFavItems.join("");
}

// Load fav items when the page loads
window.addEventListener("load", loadFavItems);