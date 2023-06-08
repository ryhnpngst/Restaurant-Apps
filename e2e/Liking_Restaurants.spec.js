const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#no_favorite_message');
  I.see('Tidak ada restaurant favorit', '#no_favorite_message');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant favorit', '#no_favorite_message');

  I.amOnPage('/');

  I.seeElement('.post-item__title a');

  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedRestaurantTitle = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant favorit', '#no_favorite_message');

  I.amOnPage('/');

  I.seeElement('.post-item__title a');

  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedRestaurantTitle = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant favorit', '#no_favorite_message');
});
