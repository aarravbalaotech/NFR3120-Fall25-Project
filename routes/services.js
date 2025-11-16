const express = require('express');
const router = express.Router();

// Sample data — replace with your DB/models as needed
const sampleServices = [
  { title: 'Consulting', description: 'Technical and strategic consulting.', cta: { href: '/contact', text: 'Contact Us' } },
  { title: 'Training', description: 'Hands-on training and workshops.', cta: { href: '/contact', text: 'Book Training' } },
  { title: 'Support', description: 'Ongoing support and maintenance.' }
];

// Note: we mount this router at '/services' in app.js, so use '/' here
router.get('/services', (req, res) => {
  res.render('services', { services: sampleServices });
});

// Optional: single-service detail route (example)
// router.get('/:id', (req, res) => {
//   const id = req.params.id;
//   const service = sampleServices[id - 1]; // adapt lookup to real DB
//   if (!service) return res.status(404).render('error', { message: 'Service not found' });
//   res.render('service-detail', { service });
// });

module.exports = router;