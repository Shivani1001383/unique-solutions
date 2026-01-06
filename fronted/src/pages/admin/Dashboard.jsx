import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Stats Card 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-gray-500 text-sm font-medium">Total Products</p>
                    <h3 className="text-3xl font-bold text-purple-900 mt-2">124</h3>
                    <p className="text-green-500 text-sm mt-2">↑ 12% from last month</p>
                </div>

                {/* Stats Card 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-gray-500 text-sm font-medium">Total Inquiries</p>
                    <h3 className="text-3xl font-bold text-purple-900 mt-2">45</h3>
                    <p className="text-green-500 text-sm mt-2">↑ 5 new today</p>
                </div>

                {/* Stats Card 3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-gray-500 text-sm font-medium">Companies</p>
                    <h3 className="text-3xl font-bold text-purple-900 mt-2">18</h3>
                    <p className="text-gray-400 text-sm mt-2">Active partners</p>
                </div>

                {/* Stats Card 4 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-gray-500 text-sm font-medium">Pending Requests</p>
                    <h3 className="text-3xl font-bold text-orange-600 mt-2">3</h3>
                    <p className="text-orange-500 text-sm mt-2">Action needed</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
                <p className="text-gray-500 italic">No recent activity to show.</p>
            </div>
        </div>
    );
};

export default Dashboard;
