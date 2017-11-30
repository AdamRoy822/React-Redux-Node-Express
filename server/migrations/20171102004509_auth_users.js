exports.up = function(knex, Promise) {
  return knex.schema.createTable('AuthUsers', function(t) {
      t.increments('id').unsigned().primary();
      t.string('firstName').notNull();
      t.string('lastName').nullable();
      t.string('email').nullable();
      t.string('username').nullable();
      t.string('password').nullable();
      t.dateTime('createdAt').notNull();
      t.dateTime('updatedAt').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('AuthUsers');
};