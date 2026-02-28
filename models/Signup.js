const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  institution: String,
  level: String,
  englishProficiency: String,
  languages: String,
  experience: String,
  interest: String,
  benefit: String,
  priorExperience: String,
  leadership: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Signup", signupSchema);