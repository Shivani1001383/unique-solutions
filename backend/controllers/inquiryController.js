import Inquiry from '../models/Inquiry.js';

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Admin
export const getInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        res.json(inquiries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create new inquiry
// @route   POST /api/inquiries
// @access  Public
export const createInquiry = async (req, res) => {
    try {
        const inquiry = new Inquiry(req.body);
        const createdInquiry = await inquiry.save();
        res.status(201).json({ success: true, message: 'Inquiry sent', inquiry: createdInquiry });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete inquiry
// @route   DELETE /api/inquiries/:id
// @access  Admin
export const deleteInquiry = async (req, res) => {
    try {
        const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
        if (inquiry) {
            res.json({ message: 'Inquiry removed' });
        } else {
            res.status(404).json({ message: 'Inquiry not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
