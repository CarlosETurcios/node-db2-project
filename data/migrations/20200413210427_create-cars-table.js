exports.up = function (knex) {
  // the change we want to make to our schema
  return knex.schema.createTable('cars', (tbl) => {
    tbl.increments();
    tbl.text('VIN').unique().notNullable();
    tbl.text('make').notNullable();
    tbl.text('model').notNullable();
    tbl.text('milage').notNullable();
    tbl.text('transmision type');
    tbl.text('status');
  });
};

exports.down = function (knex) {
  // undoing the change
  return knex.schema.dropTableifExists('cars');
};
