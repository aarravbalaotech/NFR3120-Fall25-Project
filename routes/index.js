var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About us' });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET Events page. */
router.get('/events', function(req, res, next) {
  res.render('index', { title: 'Events' });
});

/* GET Marketplace/listings page. */
router.get('/listings', function(req, res, next) {
  res.render('listings', { title: 'Marketplace', listings: [], selectedCategory: '', searchQuery: '' });
});

/* GET Contact page. */
router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Contact us' });
});

module.exports = router;
