const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  createdAt: { type: Date, default: Date.now }
});

AdminSchema.methods.setPassword = async function (plainPassword) {
  this.passwordHash = await bcrypt.hash(plainPassword, 10);
};

AdminSchema.methods.validatePassword = function (plainPassword) {
  return bcrypt.compare(plainPassword, this.passwordHash);
};