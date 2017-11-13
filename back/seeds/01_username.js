exports.seed = function(knex, Promise) {
  return knex('username').del()
    .then(function () {
      // Inserts seed entries
      return knex('username').insert([
      {
        name: "Zmoney",
        bio: "The Worst",
        img: "",
      },
      {
        name: "Jdawg",
        bio: "Da Bomb",
        img: "",
      },
      {
        name: "Mr_T",
        bio: "My favorite color is green",
        img: "",
      },
      {
        name: "Max_Tegmark",
        bio: "We are, as we understand it, the creators and the created, of the mathematical universe",
        img: "",
      },
      {
        name: "Mr_WorldWide",
        bio: "Making mixes with everybody on the radio",
        img: "",
      },
      ]);
    });
};
