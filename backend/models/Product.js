const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    items: {
        type: [String],
        default: []
    },
    companies: {
        type: [String],
        default: []
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
