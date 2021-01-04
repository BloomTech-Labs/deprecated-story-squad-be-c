exports.up = function (knex) {
  return knex.schema.createTable('novels', (tbl) => {
    tbl.increments('id').notNullable().unique().primary().unsigned();
    tbl.string('title').notNullable().unique();
    tbl.string('description').notNullable();
    tbl.integer('chapters').notNullable();
    tbl.integer('pages').notNullable().unsigned();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('novels');
};
