exports.up = function(knex, Promise) {
  return knex.schema.createTable('tech', (table) => {
  table.increments('id');
  table.text('name');
  table.text('description');
  table.text('url');
  table.text('category');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tech');
};
