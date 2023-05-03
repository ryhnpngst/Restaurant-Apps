import data from "../DATA.json";
const container = document.querySelector(".posts");

data.restaurants.forEach((restaurant) => {
  container.innerHTML += `
        <div class="post-item">
        <img class="post-item__thumbnail" src="${restaurant.pictureId}" alt="${restaurant.name}">
        <div class="post-item__content">
            <p class="post-item__rating">Rating: ${restaurant.rating}</p>
            <p class="post-item__city">Kota ${restaurant.city}</p>
            <h3 class="post-item__title"><a href="#">${restaurant.name}</a></h3>
            <p class="post-item__description">${restaurant.description}</p>
        </div>
        </div>
    `;
});
