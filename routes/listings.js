var express = require('express');
var router = express.Router();
var Listing = require('../server/models/Listings');

// Grid view with optional filter/search
router.get('/', async function(req, res, next) {
  const filter = {};
  if (req.query.category) filter.category = req.query.category;
  if (req.query.search) filter.title = { $regex: req.query.search, $options: 'i' };
  const listings = await Listing.find(filter);
  res.render('projects', {
    title: 'Marketplace',
    listings,
    selectedCategory: req.query.category || '',
    searchQuery: req.query.search || ''
  });
});

// Create
router.post('/', async function(req, res, next) {
  const listing = new Listing(req.body);
  await listing.save();
  res.redirect('/listings');
});

// Delete
router.post('/:id/delete', async function(req, res, next) {
  await Listing.findByIdAndDelete(req.params.id);
  res.redirect('/listings');
});

// Update (edit)
router.post('/:id/update', async function(req, res, next) {
  await Listing.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/listings');
});

module.exports = router;
