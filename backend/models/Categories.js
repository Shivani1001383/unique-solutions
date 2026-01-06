const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  items: [{ type: String }]
});

module.exports = mongoose.model('Category', categorySchema);