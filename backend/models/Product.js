const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  items: [{ type: String }] // Array of strings (e.g., "MIG Wires", "TIG Rods")
});

module.exports = mongoose.model('Product', productSchema);