
exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('characters', function(table) {
      table.increments('id')
      table.string('name')
      table.string('house')
      table.string('houseId')
      table.string('imagePath')
      table.string('description')
      table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('characters').then(function () {
    console.log('characters table were dropped')
  })
};
