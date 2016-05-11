var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('characterView');
});

router.get('/:id', function(req, res, next) {
  res.render('characterView');
});

module.exports = router;

