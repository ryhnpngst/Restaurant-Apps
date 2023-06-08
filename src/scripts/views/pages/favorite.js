import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="content">
          <div class="restaurant">
            <h1 class="restaurant__label">Explore Restaurant</h1>
            <div id='restaurants' class="posts"></div>
            <div id="no_favorite_message" class="no_favorite_message" style="display: none;">Tidak ada restaurant favorit</div>
          </div>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    const noFavoriteMessage = document.querySelector('#no_favorite_message');

    if (restaurants.length === 0) {
      noFavoriteMessage.style.display = 'block';
    } else {
      noFavoriteMessage.style.display = 'none';

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
