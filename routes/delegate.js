const express = require("express");
const router = express.Router();
const DelegateApplication = require("../models/DelegateApplication");

router.post("/apply", async (req, res) => {
  try {
    const application = new DelegateApplication(req.body);
    await application.save();
    res.json({ success: true, message: "Delegate application submitted" });
  } catch (err) {
    console.error("Delegate application error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;