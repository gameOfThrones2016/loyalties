module.exports = function(knex) {

  return {

    getAll: function(table, callback) {
      console.log("this is the table: ", table)
      knex(table)
      .then(function (resp) {
        console.log("this is response: ", resp)
        callback(null, resp)
      })
    },

  }
}
