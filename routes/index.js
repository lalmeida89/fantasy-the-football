var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Soho' });
});
router.get('/anythingIwant', function(req, res, next) {
  res.render('boo', { title: 'Bougie' });
});

module.exports = router;
