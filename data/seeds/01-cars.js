exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1,
          VIN: '46546dfds1554',
          make: 'ford',
          model: 'GT500',
          milage: '100,000',

          status: 'clean',
          transmisionType: 'manual',
        },
        {
          id: 2,
          VIN: '46546dfd46465s1554',
          make: 'chevy',
          model: 'silverado',
          milage: '100,000',

          status: 'clean',
          transmisionType: 'automatic',
        },
        {
          id: 3,
          VIN: '46546dfgfd65g465ds1554',
          make: 'tesla',
          model: 'cyber truck',
          milage: '1000',

          status: 'clean',
          transmisionType: 'automatic',
        },
      ]);
    });
};
