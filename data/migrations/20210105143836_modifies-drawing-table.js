exports.up = function (knex) {
  return knex.schema.table('Drawing', (tbl) => {
    tbl.string('EmojiFeedback');
  });
};

exports.down = function (knex) {
  return knex.schema.table('Drawing', (tbl) => {
    tbl.dropColumn('EmojiFeedback');
  });
};
