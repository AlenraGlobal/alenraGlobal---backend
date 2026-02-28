require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const signupRoutes = require('./routes/signup');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use('/api/signup', signupRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

app.listen(process.env.PORT || 4000, () =>
  console.log("Server running")
);

app.get("/", (req, res) => {
  res.send("Backend is running");
});