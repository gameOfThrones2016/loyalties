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
          //console.log("addNew Function has added new id: ", dbresponse[0])
          callback(null, dbresponse)
        })
    },

    update: function(table, params, newObj, callback) {
      knex(table)
        .where(params)
        .update(newObj)
        .then(function(dbresponse) {
          //console.log(`Update Function has updated ${table} params: ${params} with ${dbresponse}`)
          callback(null, dbresponse)
        })
    },

    findAllInHouse: function(table, params, callback) {
      console.log(params)
      knex(table)
      .where(params)
      .then(function (resp) {
        console.log("this is the resp", resp)
        callback(null, resp[0])
      })
    }
  }
}


