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
      knex(table)
        .insert(newObj)
        .then(function(dbresponse) {
          callback(null, dbresponse)
        })
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
      knex(table)
      .where({ houseId: houseId})
      .then(function (resp) {
        callback(null, resp)
      })
    }
  }
}


