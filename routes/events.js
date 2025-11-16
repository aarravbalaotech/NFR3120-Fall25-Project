const express = require('express');
const router = express.Router();

const sampleEvents = [
  { id: 1, title: 'Launch Workshop', date: '2025-11-20', location: 'Room 101', description: 'Introductory workshop on the new platform.' },
  { id: 2, title: 'Community Meetup', date: '2025-12-05', location: 'Main Hall', description: 'Monthly community meetup.' }
];

// We will mount this router at '/events' in app.js, so use '/' here
router.get('/', (req, res) => {
  res.render('events', { events: sampleEvents });
});

// Example detail route
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const event = sampleEvents.find(e => e.id === id);
  if (!event) return res.status(404).render('error', { message: 'Event not found' });
  // you could render an event-detail.ejs here
  res.render('event-detail', { event });
});

module.exports = router;