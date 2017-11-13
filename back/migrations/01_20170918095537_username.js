
exports.up = function(knex, Promise) {
  return knex.schema.createTable('username', (table) => {
  table.increments('id');
  table.text('name');
  table.text('bio');
  table.text('img');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('username');
};
