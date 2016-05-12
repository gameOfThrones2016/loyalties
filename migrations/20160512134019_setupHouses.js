exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('houses', function(table) {
      table.increments('id')
      table.string('name')
      table.string('imagePath')
      table.string('description')
      table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('houses').then(function () {
    console.log('houses table were dropped')
  })
};
