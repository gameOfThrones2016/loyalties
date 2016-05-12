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
  console.log("waaat")
  res.render('newCharacter', { title: 'A New Dev' });
});



module.exports = router;
