const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  initials: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  text: { type: String, required: true }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);