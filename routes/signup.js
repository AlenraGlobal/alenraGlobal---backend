const express = require('express');
const Signup = require('../models/Signup');
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const signup = new Signup({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      institution: req.body.institution,
      level: req.body.level,
      englishProficiency: req.body.englishProficiency,
      languages: req.body.languages,
      experience: req.body.experience,
      interest: req.body.interest,
      benefit: req.body.benefit,
      priorExperience: req.body.priorExperience,
      leadership: req.body.leadership
    });

    await signup.save();
    res.json({ message: "Application submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;