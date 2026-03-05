const express = require('express');
const adminAuth = require('../middleware/adminAuth');
const Signup = require('../models/Signup');
const DelegateApplication = require('../models/DelegateApplication');
const Contact = require('../models/Contact');

const router = express.Router();



// Dashboard welcome
router.get('/dashboard', adminAuth, (req, res) => {
  res.json({
    message: 'Admin dashboard',
    email: req.admin.email
  });
});

// Fetch all signups
router.get('/signups', adminAuth, async (req, res) => {
  const data = await Signup.find().sort({ createdAt: -1 });
  res.json(data);
});

// Fetch all delegate applications
router.get('/delegates', adminAuth, async (req, res) => {
  const data = await DelegateApplication.find().sort({ createdAt: -1 });
  res.json(data);
});

// Fetch all contact messages
router.get('/contacts', adminAuth, async (req, res) => {
  const data = await Contact.find().sort({ createdAt: -1 });
  res.json(data);
});

router.patch("/signups/:id", async (req, res) => {
  try {
    const updated = await Signup.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.patch("/delegates/:id", async (req, res) => {
  try {
    const updated = await Delegate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.patch("/contacts/:id", async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;