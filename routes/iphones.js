var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('iphones', { title: 'Iphone Search Results' });
});

module.exports = router;
