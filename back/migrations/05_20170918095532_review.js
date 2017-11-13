
exports.up = function(knex, Promise) {
  return knex.schema.createTable('review', (table) => {
  table.increments('id');
  table.text('title');
  table.text('body');
  table.integer('rating');
  table.integer('tech_id').references('tech.id');
  table.integer('username_id').references('username.id');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('review');
};
