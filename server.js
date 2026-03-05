require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const signupRoutes = require('./routes/signup');
const adminRoutes = require('./routes/admin');
const delegateRoutes = require("./routes/delegate");
const contactRoutes = require('./routes/contact');

const app = express();

const allowedOrigins = [
  "http://127.0.0.1:5500",
  "http://localhost:5500",
  "https://alenraglobal.org",
  "https://www.alenraglobal.org"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// ❌ REMOVE ALL app.options() LINES
// Express 5 handles OPTIONS automatically when using cors()

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use('/api/signup', signupRoutes);
app.use('/api/admin', adminRoutes);
app.use("/api/delegate", delegateRoutes);
app.use('/api/contact', contactRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(process.env.PORT || 4000, () => console.log("Server running"));