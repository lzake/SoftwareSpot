
exports.up = function(knex, Promise) {
  return knex.schema.createTable('endorse', (table) => {
  table.increments('id');
  table.integer('rating');
  table.integer('username_id').references('username.id');
  table.integer('skill_user_id').references('skill_user.id').onDelete('CASCADE');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('endorse');
};
