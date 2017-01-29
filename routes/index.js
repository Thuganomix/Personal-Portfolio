var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nessa Stabler' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

module.exports = router;
