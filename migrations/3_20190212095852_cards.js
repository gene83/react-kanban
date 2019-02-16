exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', table => {
    table.increments();
    table.string('title').notNullable();
    table.string('body', 1024);
    table
      .integer('priority_id')
      .references('id')
      .inTable('priorities')
      .notNullable();
    table
      .integer('status_id')
      .references('id')
      .inTable('statuses')
      .notNullable();
    table
      .integer('created_by')
      .references('id')
      .inTable('users');
    // .notNullable();
    table
      .integer('assigned_to')
      .references('id')
      .inTable('users');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
