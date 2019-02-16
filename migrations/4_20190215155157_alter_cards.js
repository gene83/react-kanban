exports.up = function(knex, Promise) {
  return knex.schema.alterTable('cards', table => {
    table
      .string('body', 1024)
      .notNullable()
      .alter();
  });
};

exports.down = function(knex, Promise) {
  return;
};
