// DO YOUR MAGIC
exports.up = function (knex) {
    return knex.schema
      .createTable('Cars', table => {
        table.increments('id')
        table.text('vin').unique().notNullable()
        table.text('make').unique().notNullable()
        table.text('model').unique().notNullable()
        table.decimal('mileage').unique().notNullable()
        table.text('title').notNullable()
        table.text('transmission').notNullable()
      })
    // .createTable('users', table => {
  
    // })
  };
  
  exports.down = function (knex) {
    return knex.schema
      // .dropTableIfExists('users')
      .dropTableIfExists('fruits')
  };
  