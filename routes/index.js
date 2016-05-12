var express = require('express');
var router = express.Router();

/* GET home page. */
 router.get('/', function(req, res, next) {
  res.render('houseindex', { title: 'Game of DEVs' });
});

 router.get('/house/:id', function(req, res, next) {
  res.render('houseview', { title: ' thou a Capulet?' });
});

 router.get('/character/:id', function(req, res, next) {
  res.render('characterview', { title: 'a Capulet?' });
});

router.get('/characters/', function(req, res, next) {
  res.render('characterIndex', { title: 'Dev of the Day' });
});

router.get('/newcharacter', function(req, res, next) {
  res.render('newCharacter', { title: 'A New Dev' });
});

router.get('/newhouse', function(req, res, next) {
  console.log("waaat")
  res.render('newHouse', { title: 'A New Dev' });
});

router.get('/character/edit/:id', function(req, res, next) {
  res.render('editCharacter', { title: 'Dev of the Day' });
});

router.get('/house/edit/:id', function(req, res, next) {
  res.render('editHouse', { title: 'Dev of the Day' });
});

module.exports = router;
