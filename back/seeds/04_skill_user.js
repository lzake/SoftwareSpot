
exports.seed = function(knex, Promise) {
  return knex('skill_user').del()
    .then(function () {
      // Inserts seed entries
      return knex('skill_user').insert([
      {
        username_id: 1,
        skill_id: 1,
      },
      {
        username_id: 2,
        skill_id: 2,
      },
      {
        username_id: 3,
        skill_id: 3,
      },
      {
        username_id: 4,
        skill_id: 4,
      },
      {
        username_id: 5,
        skill_id: 5,
      },
      ]);
    });
};
