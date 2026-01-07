import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true } // In production, this should be hashed
}, {
    timestamps: true
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
