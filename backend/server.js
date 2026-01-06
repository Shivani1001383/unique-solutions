const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use('/api/categories', require('./routes/categories'));
app.use('/api/products', require('./routes/product'));
// app.use('/api/testimonials', require('./routes/testimonials'));
// app.use('/api/inquiries', require('./routes/inquiries'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_DB)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});