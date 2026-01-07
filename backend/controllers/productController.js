import Product from '../models/Product.js';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ id: 1 });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Admin
export const createProduct = async (req, res) => {
    try {
        // Auto-increment ID logic (simplified)
        const lastProduct = await Product.findOne().sort({ id: -1 });
        const id = lastProduct ? lastProduct.id + 1 : 1;

        const product = new Product({
            id,
            ...req.body
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Admin
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.id });

        if (product) {
            product.name = req.body.name || product.name;
            product.img = req.body.img || product.img;
            product.items = req.body.items || product.items;
            product.companies = req.body.companies || product.companies;

            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Admin
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ id: req.params.id });
        if (product) {
            res.json({ message: 'Product removed' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
