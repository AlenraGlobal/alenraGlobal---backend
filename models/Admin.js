// models/Admin.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  createdAt: { type: Date, default: Date.now }
});

AdminSchema.methods.setPassword = async function (plainPassword) {
  const saltRounds = 10;
  this.passwordHash = await bcrypt.hash(plainPassword, saltRounds);
};

AdminSchema.methods.validatePassword = function (plainPassword) {
  return bcrypt.compare(plainPassword, this.passwordHash);
};

module.exports = mongoose.model('Admin', AdminSchema);