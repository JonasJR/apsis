var express = require('express');
var router = express.Router();
var bowling = require('../controller/bowling');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bowling' });
});

router.get('/score', function(req, res, next) {
  res.status(200).json(bowling.calculateScore(req.query.frames)); 
});

module.exports = router;
