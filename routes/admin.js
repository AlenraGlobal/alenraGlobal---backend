// routes/admin.js
const express = require('express');
const adminAuth = require('../middleware/adminAuth');

const router = express.Router();

router.get('/dashboard', adminAuth, (req, res) => {
  res.json({
    message: 'Admin dashboard',
    username: req.admin.username
  });
});

module.exports = router;