import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    img: { type: String, required: true }, // Changed from image
    // type: { type: String, required: true }, // Removed as not in JSON
    // description: { type: String, required: true }, // Removed as not in JSON
    items: [{ type: String }],
    companies: [{ type: String }],
    // Future: price: { type: Number, default: 0 }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;
