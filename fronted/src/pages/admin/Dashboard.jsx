import React from 'react';

import InvoiceModal from '../../components/admin/InvoiceModal';

const Dashboard = () => {
    const [showInvoiceModal, setShowInvoiceModal] = React.useState(false);
    const [stats, setStats] = React.useState({
        totalProducts: 0,
        totalOrders: 0,
        pendingOrders: 0,
        completedOrders: 0,
        totalCustomers: 0,
        totalSale: 0,
        totalProfit: 0
    });
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/dashboard/stats`);
            const data = await response.json();
            setStats(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching dashboard stats:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="p-10 text-center text-purple-600 font-bold text-xl">Loading Dashboard...</div>;
    }

    const StatCard = ({ title, value, subText, valueColor = "text-purple-900", subTextColor = "text-gray-500", action }) => (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
            <p className="text-gray-500 text-sm font-medium">{title}</p>
            <h3 className={`text-3xl font-bold mt-2 ${valueColor}`}>{value}</h3>
            {subText && <p className={`text-sm mt-2 ${subTextColor}`}>{subText}</p>}
            {action && (
                <div className="mt-4 border-t pt-3">
                    {action}
                </div>
            )}
        </div>
    );

    return (
        <div>
            <InvoiceModal
                isOpen={showInvoiceModal}
                onClose={() => setShowInvoiceModal(false)}
            />
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* 1. Total Sale */}
                <StatCard
                    title="Total Sale"
                    value={`₹${stats.totalSale}`}
                    subText="Revenue generated"
                    valueColor="text-gray-800"
                    action={
                        <button
                            onClick={() => setShowInvoiceModal(true)}
                            className="text-xs font-semibold text-purple-600 hover:text-purple-800 flex items-center bg-purple-50 px-3 py-1.5 rounded-md hover:bg-purple-100 transition-colors w-full justify-center"
                        >
                            <span className="mr-1 text-base">+</span> Create Invoice
                        </button>
                    }
                />

                {/* 2. Total Orders */}
                <StatCard
                    title="Total Orders"
                    value={stats.totalOrders}
                    subText="All time inquiries"
                />

                {/* 3. Pending Orders */}
                <StatCard
                    title="Pending Orders"
                    value={stats.pendingOrders}
                    subText="Action required"
                    valueColor="text-orange-600"
                    subTextColor="text-orange-500"
                />

                {/* 4. Total Customers */}
                <StatCard
                    title="Total Customers"
                    value={stats.totalCustomers}
                    subText="Unique contacts"
                />

                {/* 5. Completed Orders */}
                <StatCard
                    title="Completed Orders"
                    value={stats.completedOrders}
                    subText="Successfully processed"
                    valueColor="text-green-600"
                    subTextColor="text-green-500"
                />

                {/* 6. Total Products */}
                <StatCard
                    title="Total Products"
                    value={stats.totalProducts}
                    subText="Active inventory"
                />

                {/* 7. Total Profit */}
                <StatCard
                    title="Total Profit"
                    value={`₹${stats.totalProfit}`}
                    subText="Net earnings"
                    valueColor="text-gray-800"
                />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
                <p className="text-gray-500 italic">No recent activity to show.</p>
            </div>

            {/* Note about missing data */}
            <div className="mt-6 bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-lg flex items-center gap-3">
                <span className="text-xl">ℹ️</span>
                <p className="text-sm">
                    <strong>Note:</strong> Sale and Profit are ₹0 because product prices are not set.
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
