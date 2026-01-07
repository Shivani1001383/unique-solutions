import Admin from '../models/Admin.js';

// @desc    Auth user & get token (Login)
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });

        if (admin && admin.password === password) { // Plain text compare for now as requested
            res.json({
                success: true,
                _id: admin._id,
                username: admin.username,
                token: 'dummy-token' // In real app use JWT
            });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update admin credentials
// @route   PUT /api/auth/update
// @access  Private
export const updateCredentials = async (req, res) => {
    const { currentPassword, newUsername, newPassword } = req.body;

    try {
        // Assume single admin for now, or find by logged in user context if we had middleware
        // Since we don't have middleware passing user ID yet, we'll find by current password matches (risky but functional for single user)
        // Better: We should pass username in body or standard implementation. 
        // Let's assume there is only one admin document for this app.
        const admin = await Admin.findOne();

        if (admin && admin.password === currentPassword) {
            if (newUsername) admin.username = newUsername;
            if (newPassword) admin.password = newPassword;

            await admin.save();
            res.json({ success: true, message: 'Credentials updated' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid current password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
