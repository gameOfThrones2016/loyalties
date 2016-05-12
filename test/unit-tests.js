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
  description: "Broc is the Chief Maester to House Roa",
  created_at: Date.now(),
  updated_at: Date.now()
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


// db.getAll
test('it gets all the houses', function (t) {
  db.getAll('houses', function (err, resp) {
    housesNames.map(function(house, i) {
      t.equal(resp.name, house, 'Correct house names return in list')
    })
    t.end()
  })
})

test('it gets all the characters in a house', function (t) {
  db.getHouseChars('Roa', function (err, resp) {
    roaChars.map(function(chars) {
      t.equal(housesNames[i], resp[i].name, 'Correct house members returned')
    })
    t.end()
  })
})


test('it gets a particular House', function (t) {
  db.findOne('houses', { id: 1 }, function (err, resp) {
    t.equal(resp.name, "Roa", 'it got the right house')
    t.end()
  })
})

test('it gets a particular Character', function (t) {
  db.findOne('characters', { id: 1 }, function (err, resp) {
    t.equal(resp.name, "Olly", 'it got the right house')
    t.end()
  })
})


