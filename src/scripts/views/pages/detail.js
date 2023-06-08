import UrlParser from '../../routes/ulr-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import API_ENDPOINT from '../../globals/api-endpoint';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
    <section class="content">
      <div class="restaurant">
        <h1 class="restaurant__label">Detail Restaurant</h1>
        <div id='restaurant' class="post__detail"></div>
        <div id="likeButtonContainer"></div>
      </div>

    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });

    const form = document.querySelector('#addReview');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = document.querySelector('#name').value;
      const review = document.querySelector('#review').value;

      try {
        const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': 'testing key',
          },
          body: JSON.stringify({
            id: UrlParser.parseActiveUrlWithoutCombiner().id,
            name,
            review,
          }),
        });

        const responseJson = await response.json();
        this.afterRender(responseJson);
      } catch (error) {
        console.log(error);
      }
    });
  },
};

export default Detail;
