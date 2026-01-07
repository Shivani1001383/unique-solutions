import mongoose from 'mongoose';

const inquirySchema = mongoose.Schema({
    // id: { type: Number }, // Let MongoDB handle _id, we can map it if needed
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    product: { type: String },
    message: { type: String },
    status: { type: String, default: 'New', enum: ['New', 'Read', 'Completed'] },
    date: { type: Date, default: Date.now }
}, {
    timestamps: true
});

// Virtual for 'id' to match frontend expectation (if it expects string/number id)
inquirySchema.virtual('id').get(function () {
    return this._id.toHexString();
});

inquirySchema.set('toJSON', {
    virtuals: true
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry;
