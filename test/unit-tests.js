var redtape = require('redtape')
// var App = require('../server')
var dbConfig = require('../db-config')
var knex = dbConfig.knex
var config = dbConfig.config

var db = require('../lib/db')(knex)

var broc = {
  name: 'Broc',
  house: 'House Roa',
  houseid: 1,
  imagePath: "#",
  description: "Broc is the Chief Maester to House Roa"
}

var housesNames = ["House Roa", "House Hihi", "House EDA", "House Kotare"]
var roaChars = ["Olly", "Hape", " Uili", "Surya"]

var test = redtape({
  beforeEach: function (callback) {
    return knex.migrate.latest(config)
      .then(function () {
        callback()
      })
  },

  afterEach: function (callback) {
    knex.migrate.rollback(config)
      .then(function () {
        callback()
      })
  }
})

test('setup', function (t) {
  knex.migrate.rollback(config)
    .then(function () {
      t.end()
    })
})


test("test add character function", function (t) {
  db.addNew('characters', broc, function(undefined, dbresponse) {
    t.ok(dbresponse[0]>0)
    t.end()
  })
})





















