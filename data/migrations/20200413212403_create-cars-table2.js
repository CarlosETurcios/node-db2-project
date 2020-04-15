exports.up = function (knex) {
  // the change we want to make to our schema
  return knex.schema.table('cars', (tbl) => {
    tbl.text('transmisionType');
  });
};

exports.down = function (knex) {
  // undoing the change
  return knex.schema.dropTableifExists('cars');
};
