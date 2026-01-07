import Product from '../models/Product.js';
import Inquiry from '../models/Inquiry.js';

// @desc    Get dashboard stats
// @route   GET /api/dashboard/stats
// @access  Admin
export const getDashboardStats = async (req, res) => {
    try {
        const totalProducts = await Product.countDocuments();
        const totalOrders = await Inquiry.countDocuments();
        const pendingOrders = await Inquiry.countDocuments({ status: 'New' });
        const completedOrders = await Inquiry.countDocuments({ status: { $in: ['Completed', 'Read'] } });

        // Count distinct customers by phone
        const customers = await Inquiry.distinct('phone');
        const totalCustomers = customers.length;

        const stats = {
            totalProducts,
            totalOrders,
            pendingOrders,
            completedOrders,
            totalCustomers,
            totalSale: 0,
            totalProfit: 0
        };

        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
