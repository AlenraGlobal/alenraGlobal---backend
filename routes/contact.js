// routes/contact.js
const express = require('express');
const ContactMessage = require('../models/Contact');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, subject = '', message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await ContactMessage.create({ name, email, subject, message });
    return res.status(201).json({ status: 'received' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'server_error' });
  }
});

module.exports = router;