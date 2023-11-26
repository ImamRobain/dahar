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

// Toggle class active Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");
// Hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
