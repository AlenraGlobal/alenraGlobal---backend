// routes/contact.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const ContactMessage = require('../models/ContactMessage');

const router = express.Router();

router.post(
  '/',
  [
    body('name').isLength({ min: 2 }).trim(),
    body('email').isEmail().normalizeEmail(),
    body('subject').optional().trim(),
    body('message').isLength({ min: 5 }).trim()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

    const { name, email, subject = '', message } = req.body;

    try {
      await ContactMessage.create({ name, email, subject, message });
      return res.status(201).json({ status: 'received' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'server_error' });
    }
  }
);

module.exports = router;