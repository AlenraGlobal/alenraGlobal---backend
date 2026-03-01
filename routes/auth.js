// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const router = express.Router();

// POST /api/auth/admin/register
router.post('/admin/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username and password required' });

  try {
    const existing = await Admin.findOne({ username });
    if (existing) return res.status(409).json({ error: 'Username already taken' });

    const admin = new Admin({ username });
    await admin.setPassword(password);
    await admin.save();

    return res.status(201).json({ message: 'Admin created' });
  } catch (err) {
    return res.status(500).json({ error: 'server_error' });
  }
});

// POST /api/auth/admin/login
router.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username and password required' });

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).json({ error: 'Invalid credentials' });

    const valid = await admin.validatePassword(password);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { adminId: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return res.json({ token });
  } catch (err) {
    return res.status(500).json({ error: 'server_error' });
  }
});

module.exports = router;