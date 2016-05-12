module.exports = function(knex) {
  return {
    getAll: function(table, callback){
      knex(table)
      .where()
    },

    addNew: function(table, newObj, callback){
      knex(table)
        .insert(newObj)
        .then(function(dbresponse) {
          console.log("addNew Function has added: ", dbresponse)
          callback(null, dbresponse)
        })
    },

    update: function(table, params, newObj, callback) {
      knex(table)
        .where(params)
        .update(newObj)
        .then(function(dbresponse) {
          console.log(`Update Function has updated ${table} params: ${params} with ${dbresponse}`)
          callback(null, dbresponse)
        })
    }
  }
}

