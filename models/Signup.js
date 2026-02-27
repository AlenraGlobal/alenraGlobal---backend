const mongoose = require('mongoose');

const SignupSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  package: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Signup', SignupSchema);