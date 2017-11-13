
exports.up = function(knex, Promise) {
  return knex.schema.createTable('skill', (table) => {
  table.increments('id');
  table.text('name');
  table.boolean('is_professional');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('skill');
};
