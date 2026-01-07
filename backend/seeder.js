import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import Product from './models/Product.js';
import Inquiry from './models/Inquiry.js';
import Admin from './models/Admin.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const importData = async () => {
    try {
        // Clear existing
        await Product.deleteMany();
        await Inquiry.deleteMany();
        await Admin.deleteMany();

        // Read JSON files
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/products.json'), 'utf-8'));
        const inquiries = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/inquiries.json'), 'utf-8'));
        const adminData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/admin.json'), 'utf-8'));

        // Import
        await Product.insertMany(products);
        await Inquiry.insertMany(inquiries);
        await Admin.create(adminData);

        console.log('Data Imported Successfully!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

importData();
