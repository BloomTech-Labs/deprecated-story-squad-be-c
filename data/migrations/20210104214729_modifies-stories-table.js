exports.up = function (knex) {
  return knex.schema.table('Stories', (tbl) => {
    tbl
      .integer('NovelID')
      .notNullable()
      .references('Novels.ID')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
    tbl.integer('Chapter').unsigned().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table('Stories', (tbl) => {
    tbl.dropColumn('NovelID');
    tbl.dropColumn('Chapter');
  });
};
