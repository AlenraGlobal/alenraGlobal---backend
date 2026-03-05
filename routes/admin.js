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

module.exports = router;