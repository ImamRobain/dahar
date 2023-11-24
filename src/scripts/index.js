import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import DATA from "../public/data/DATA.json";

const getRestaurant = (data) => {
  data.restaurants.forEach((restaurant) => {
    const restaurantItem = document.getElementById("restaurant");
    restaurantItem.innerHTML += `
        <div tabindex="0" class="restaurant-card">
            <div class="restaurant-img">
            <img src="${restaurant.pictureId}">
            </div>
            <div class="restaurant-content">
            <h3>${restaurant.name}</h3>
            </div>
            <div class="restaurant-description">
            <p>${restaurant.description}</p>
            </div>
            <div class="restaurant-city">
            <h4>${restaurant.city}</h4>
            </div>
            <div class="restaurant-rating">
            <p>${restaurant.rating}</p>
            </div>
        </div>
        `;
  });
};
getRestaurant(DATA);

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});
