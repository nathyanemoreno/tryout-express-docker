
exports.up = function(knex) {
  return knex.schema.createTable('technologies', function (table) {
    table.increments('id');

    table.string('name').unique().notNullable();

    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('technologies');
};
