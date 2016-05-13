var express = require('express');
var router = express.Router();
var Knex = require('knex')
var config = require('../knexfile')
var knex = Knex(config[process.env.NODE_ENV || 'development'])
var db = require('../lib/db')(knex)

/* GET home page. */
//-------DONE-------------//
 router.get('/', function(req, res, next) {
  db.getAll('houses', function(err, data) {
    res.render('houseindex', { Houses: data });
  })
});

 //   Houses routes
//DONE----------HOUSE By ID--------------//
router.get('/house/:id', function(req, res, next) {
  db.findOne('houses', req.params, function(err, data){
    db.findAllInHouse('characters', req.params.id, function(err, characters){
      res.render('houseview', { House: [data], People: characters });
    })
  })
});

router.get('/newhouse', function(req, res, next) {
  res.render('newHouse', { title: 'A New Dev' });
});

router.post('/newhouse', function(req, res, next) {
  db.addNew('houses', req.body, function(err, data){
    res.redirect('/house/'+data[0]);
  })
});

router.get('/house/edit/:id', function(req, res, next) {
  res.render('editHouse', { title: 'Dev of the Day' });
});

// Characters routes
router.get('/characters/', function(req, res, next) {
  db.getAll('characters', function(err, data) {
    res.render('characterIndex', { Characters: data });
  })
});
//DONE----One Character-----//
router.get('/characters/:id', function(req, res, next) {
  db.findOne('characters', req.params, function(err, person){
    res.render('characterview', { Character: [person]});
  })
});

router.get('/newcharacter', function(req, res, next) {
  res.render('newCharacter', { title: 'A New Dev' });
});

router.post('/newcharacter', function(req, res, next) {
  console.log(req.body)
  db.addNew('characters', req.body, function(err, data){
    res.redirect('/characters/'+data[0]);
  })
});

router.get('/character/edit/:id', function(req, res, next) {
  res.render('editCharacter', { title: 'Dev of the Day' });
});


module.exports = router;
