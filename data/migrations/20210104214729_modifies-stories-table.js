exports.up = function(knex) {
  return knex.schema.table('Stories', (tbl) => {
    tbl.integer('NovelID').notNullable().references("id")
  });
};
  
exports.down = function(knex) {
    
};
