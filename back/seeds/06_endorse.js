exports.seed = function(knex, Promise) {
  return knex('endorse').del()
    .then(function () {
      // Inserts seed entries
      return knex('endorse').insert([
      {
        rating: 2,
        username_id: 1,
        skill_user_id: 1,
      },
      {
        rating: 3,
        username_id: 2,
        skill_user_id: 2,
      },
      {
        rating: 4,
        username_id: 3,
        skill_user_id: 3,
      },
      {
        rating: 2,
        username_id: 4,
        skill_user_id: 4,
      },
      {
        rating: 5,
        username_id: 5,
        skill_user_id: 5,
      },
      ]);
    });
};
