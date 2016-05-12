module.exports = function(knex) {
  return {


    getAll: function(table, callback) {
      knex(table)
      .then(function (resp) {
        callback(null, resp)
      })
    },

    findOne: function(table, params, callback) {
      console.log(params)
      console.log(table)
      knex(table)
      .where(params.name)
      .then(function (resp) {
        callback(resp)
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
    }
  }
}


