const express = require('express');
const jwt = require('jsonwebtoken');
const Signup = require('../models/Signup');
const router = express.Router();

function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    next();
  });
}

router.get('/signups', verifyToken, async (req, res) => {
  try {
    const signups = await Signup.find().sort({ createdAt: -1 });
    res.json(signups);
  } catch (err) {
    res.status(500).json({ error: "Error fetching signups" });
  }
});

module.exports = router;