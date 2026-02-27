const express = require('express');
const Signup = require('../models/Signup');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const signup = await Signup.create(req.body);
    res.json({ message: "Signup saved", signup });
  } catch (err) {
    res.status(500).json({ error: "Error saving signup" });
  }
});

module.exports = router;