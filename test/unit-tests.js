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
var Tieke = {
  name: 'House Tieke',
  imagePath: "#",
  description: "Tieke is the next House of the realm"
}

var TiekeUpdate = {
  id: 1,
  name: 'House Tieke',
  imagePath: "#",
  description: "Tieke table updated"
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


test("test add Character function", function (t) {
  db.addNew('characters', broc, function(undefined, dbresponse) {
    t.ok(dbresponse[0]>0)
    t.end()
  })
})

test('it gets all the houses', function (t) {
  db.getAll('houses', function (err, resp) {
    housesNames.map(function(house, i) {
      t.equal(resp.name, house, 'Correct house names return in list')
    })
    t.end()
  })
})

test("test add House function", function (t) {
  db.addNew('houses', Tieke, function(undefined, dbresponse) {
    t.ok(dbresponse[0]>0)
    t.end()
  })
})

test("test update House function", function(t){
  db.update('houses',{id: TiekeUpdate.id},TiekeUpdate, function(undefined, dbresponse){
  t.ok(dbresponse!==undefined)
  t.end()
  })
})




















