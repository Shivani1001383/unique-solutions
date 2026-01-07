import React, { useEffect, useState } from 'react';
import { ShoppingCart, RefreshCw, Eye } from 'lucide-react';

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/inquiries`);
            const data = await response.json();
            // Filter only entries that likely resemble orders (have product specified)
            // Or show all, but visually distinguish. User asked for "Orders".
            // For now, we show everything but call them "Orders"
            setOrders(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setLoading(false);
        }
    };

    if (loading) return <div className="p-10 text-center">Loading Orders...</div>;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                    <ShoppingCart className="text-blue-600" />
                    Customer Orders
                </h1>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold">
                    Total Orders: {orders.length}
                </div>
            </div>

            <div className="grid gap-6">
                {orders.map((order) => (
                    <div key={order.id} className="bg-white p-6 rounded-xl shadow border border-gray-100 flex justify-between items-center hover:shadow-md transition">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="font-bold text-lg text-gray-800">{order.name}</span>
                                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                                    {new Date(order.date).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="text-gray-600 mb-2">
                                <span className="font-medium">Contact:</span> {order.phone} {order.email && `| ${order.email}`}
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 inline-block min-w-[300px]">
                                <span className="font-bold text-blue-800 block text-xs uppercase mb-1">Requirement / Product</span>
                                <span className="text-gray-800 font-medium">
                                    {order.product || order.message || 'No details provided'}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                {order.status}
                            </span>
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                                <Eye size={16} /> View Details
                            </button>
                        </div>
                    </div>
                ))}

                {orders.length === 0 && (
                    <div className="p-10 text-center text-gray-500 bg-white rounded-xl border border-dashed">
                        No orders received yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminOrders;
