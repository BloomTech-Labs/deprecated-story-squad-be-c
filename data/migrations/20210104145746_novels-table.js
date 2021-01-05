exports.up = function (knex) {
  return knex.schema.createTable('Novels', (tbl) => {
    tbl.increments('ID').notNullable().unique().primary().unsigned();
    tbl.string('Title').notNullable().unique();
    tbl.string('Description').notNullable();
    tbl.integer('Chapters').notNullable();
    tbl.integer('Pages').notNullable().unsigned();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('Novels');
};
