module.exports = function(knex) {
  return {


    getAll: function(table, callback) {
      knex(table)
      .then(function (resp) {
        callback(null, resp)
      })
    },

    findOne: function(table, params, callback) {
      knex(table)
      .where(params)
      .then(function (resp) {
        callback(null, resp[0])
      })
    },


    addNew: function(table, newObj, callback){
      console.log(`insert into ${table} (id, name, house, imagePath, description) values (500,'${newObj.name}', '${newObj.house}', '${newObj.imagePath}', '${newObj.description}')`)
      knex.raw( `insert into ${table} (id, name, house, imagePath, description) values (6032,'${newObj.name}', '${newObj.house}', '${newObj.imagePath}', '${newObj.description}')`)
          .then( function(dbresponse) {
            callback(null, dbresponse)
          }) 
      // knex(table)
      //   .insert(newObj)
      //   .then(function(dbresponse) {
      //     callback(null, dbresponse)
      //   })
    },

    update: function(table, params, newObj, callback) {
      knex(table)
        .where(params)
        .update(newObj)
        .then(function(dbresponse) {
          callback(null, dbresponse)
        })
    },

    findAllInHouse: function(table, houseId, callback) {
      knex('characters')
      // .join('houses', 'houses.id', 'characters.houseId')
      // .select('characters.id', 'characters.name', 'characters.imagePath')
      .where('characters.houseId', houseId)
      .then(function (resp) {
        console.log(resp)
        callback(null, resp)
      })
    }
  }
}


