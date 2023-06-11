import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant__header">
      <img class="restaurant__poster lazyload" data-src="${`${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}`}" alt="${restaurant.name}" />
      <h2 class="restaurant__title">${restaurant.name}</h2>
      <p class="restaurant__address">${restaurant.address}, ${restaurant.city}</p>
    </div>
    <div class="restaurant__overview">
      <h3>Deskripsi Restoran</h3>
      <p>${restaurant.description}</p>
      <div class="restaurant__menu">
        <div class="restaurant__foods">
          <h4>Menu Makanan</h4>
          <ul>
            ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
          </ul>
        </div>
        <div class="restaurant__drinks">
          <h4>Menu Minuman</h4>
          <ul>
            ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
    <div class="restaurant__review">
    <h1 class="restaurant__label">Customer Review</h1>
        <div class="reviews">
        ${restaurant.customerReviews.map((review) => `
          <div class="review__item">
            <div class="review__header">
              <p class="review__name">${review.name}</p>
              <p class="review__date">${review.date}</p>           
            </div>
            <p class="review__text">${review.review}</p>
          </div>  
        `).join('')}
        </div>
        <div class="form__review">
            <h3>Tambahkan Review</h3>
            <form method="POST" id="addReview">
                <div class="form__group">
                    <label for="name">Nama</label>
                    <input type="text" id="name" name="name" placeholder="Masukkan nama anda" required>
                </div>
                <div class="form__group">
                    <label for="review">Review</label>
                    <textarea id="review" name="review" placeholder="Masukkan review anda" required></textarea>
                </div>
                <div class="form__group">
                    <button type="submit" id="submit-review" class="btn btn__primary">Kirim</button>
                </div>
            </form>
        </div>
    </div>



  `;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="post-item">
  <img class="post-item__thumbnail lazyload" data-src="${`${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}`}" alt="${restaurant.name}">
  <div class="post-item__content">
    <p class="post-item__rating">Rating: ${restaurant.rating}</p>
    <p class="post-item__city">Kota ${restaurant.city}</p>
    <h3 class="post-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
    <p class="post-item__description">${restaurant.description}</p>
  </div>
  </div> 
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
