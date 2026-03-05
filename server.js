require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const signupRoutes = require('./routes/signup');
const adminRoutes = require('./routes/admin');
const delegateRoutes = require("./routes/delegate");
const contactRoutes = require('./routes/contact');

const app = express();

app.use(cors({
  origin: [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "https://alenraglobal.org",
    "https://www.alenraglobal.org"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.options("*", cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use('/api/signup', signupRoutes);
app.use('/api/admin', adminRoutes);
app.use("/api/delegate", delegateRoutes);
app.use('/api/contact', contactRoutes);

app.listen(process.env.PORT || 4000, () => console.log("Server running"));

app.get("/", (req, res) => {
  res.send("Backend is running");
});