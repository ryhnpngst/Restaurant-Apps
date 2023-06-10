Feature('Reviewing Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('reviewing one restaurant', async ({ I }) => {
  I.seeElement('.post-item__title a');

  I.click(locate('.post-item__title a').first());

  I.seeElement('.form__review');

  I.fillField('#name', 'E2E Test');
  I.fillField('#review', 'E2E Test');

  I.seeElement('#submit-review');
  I.click('#submit-review');
});
