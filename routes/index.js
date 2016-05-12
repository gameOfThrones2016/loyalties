var express = require('express');
var router = express.Router();

/* GET home page. */
 router.get('/', function(req, res, next) {
  res.render('houseindex', { title: 'Game of DEVs' });
});

 router.get('/:id', function(req, res, next) {
  res.render('houseview', { title: ' thou a Capulet?' });
});

 router.get('/character/:id', function(req, res, next) {
  res.render('characters', { title: 'a Capulet?' });
});



module.exports = router;
