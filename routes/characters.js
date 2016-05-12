var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('characters', { title: 'Devs in Play' });
});

router.get('/characters/:id', function(req, res, next) {
  res.render('characterview', { title: 'Dev of the Day' });
});

module.exports = router;

