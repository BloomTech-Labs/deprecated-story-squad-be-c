exports.up = function (knex) {
  return knex.schema.table('Writing', (tbl) => {
    tbl.string('EmojiFeedback');
  });
};

exports.down = function (knex) {
  return knex.schema.table('Writing', (tbl) => {
    tbl.dropColumn('EmojiFeedback');
  });
};
