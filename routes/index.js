var express = require('express');
var router = express.Router();

/* GET home page. */
 router.get('/', function(req, res, next) {
  res.render('index', { title: 'Game of DEVs' });
});

 // app.get('/houseIndex', function(req, res) {
 // res.redirect('/houseV')
 // })

module.exports = router;
