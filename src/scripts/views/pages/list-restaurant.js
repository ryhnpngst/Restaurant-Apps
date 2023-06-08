import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
      <section class="content">
        <div class="restaurant">
          <h1 class="restaurant__label">Explore Restaurant</h1>
          <div id='restaurants' class="posts"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },

};

export default ListRestaurant;
