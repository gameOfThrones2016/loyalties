var express = require('express');
var router = express.Router();
var Knex = require('knex')
var config = require('../knexfile')
var knex = Knex(config[process.env.NODE_ENV || 'development'])
var db = require('../lib/db')(knex)

/* GET home page. */
 router.get('/', function(req, res, next) {
  db.getAll('houses', function(err, data) {
    res.render('houseindex', { Houses: data });
  })
});

 //   Houses routes

router.get('/house/:id', function(req, res, next) {
  db.findOne('houses', req.params, function(err, data){
    db.findAllInHouse('characters', req.params.id, function(err, characters){
      console.log({ House: data, People: characters })
      res.render('houseview', { House: [data], People: characters });
    })
  })
});

router.get('/newhouse', function(req, res, next) {
  res.render('newHouse', { title: 'A New Dev' });
});

router.post('/newhouse', function(req, res, next) {
  res.redirect('/house/:id', { title: 'A New Dev' });
});

router.get('/house/edit/:id', function(req, res, next) {
  res.render('editHouse', { title: 'Dev of the Day' });
});

// Characters routes
router.get('/characters/', function(req, res, next) {
  res.render('characterIndex', { title: 'Dev of the Day' });
});

router.get('/characters/:id', function(req, res, next) {
  db.findOne('characters', req.params)
  res.render('characterview', { title: 'a Capulet?' });
});

router.get('/newcharacter', function(req, res, next) {
  res.render('newCharacter', { title: 'A New Dev' });
});

router.post('/newcharacter', function(req, res, next) {
  res.redirect('/character/:id', { title: 'A New Dev' });
});

router.get('/character/edit/:id', function(req, res, next) {
  res.render('editCharacter', { title: 'Dev of the Day' });
});


module.exports = router;
