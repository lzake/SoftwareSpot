exports.seed = function(knex, Promise) {
  return knex('skill').del()
    .then(function () {
      // Inserts seed  Entries
      return knex('skill').insert([
      {
        name: "FrontEnd",
        is_professional: true,
      },
      {
        name: "BackEnd",
        is_professional: true,
      },
      {
        name: "Design",
        is_professional: true,
      },
      {
        name: "Agile",
        is_professional: true,
      },
      {
        name: "ERD",
        is_professional: true,
      },
      ]);
    });
};
