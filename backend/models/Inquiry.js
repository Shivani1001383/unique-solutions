const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,
  product: String,
  message: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inquiry', inquirySchema);