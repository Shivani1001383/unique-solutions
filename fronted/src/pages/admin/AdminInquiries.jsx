import React, { useEffect, useState } from 'react';
import { MessageSquare, Trash2, RefreshCw } from 'lucide-react';

const AdminInquiries = () => {
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchInquiries();
    }, []);

    const fetchInquiries = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/inquiries`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            setInquiries(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching inquiries:', error);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Delete this inquiry?')) {
            try {
                await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/inquiries/${id}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                fetchInquiries();
            } catch (error) {
                console.error('Error deleting inquiry:', error);
            }
        }
    };

    if (loading) return <div className="p-10 text-center">Loading Inquiries...</div>;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                    <MessageSquare className="text-purple-600" />
                    Customer Inquiries
                </h1>
                <button
                    onClick={fetchInquiries}
                    className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition"
                >
                    <RefreshCw size={20} /> Refresh
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-purple-50 text-purple-900">
                        <tr>
                            <th className="p-4 font-bold border-b">Date</th>
                            <th className="p-4 font-bold border-b">Name</th>
                            <th className="p-4 font-bold border-b">Contact</th>
                            <th className="p-4 font-bold border-b">Product/Message</th>
                            <th className="p-4 font-bold border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {inquiries.map((inquiry) => (
                            <tr key={inquiry.id} className="hover:bg-gray-50 transition">
                                <td className="p-4 text-sm text-gray-500">
                                    {new Date(inquiry.date).toLocaleDateString()}
                                </td>
                                <td className="p-4 font-semibold text-gray-800">{inquiry.name}</td>
                                <td className="p-4 text-sm">
                                    <div className="font-medium">{inquiry.phone}</div>
                                    <div className="text-gray-500">{inquiry.email}</div>
                                </td>
                                <td className="p-4">
                                    {inquiry.product && (
                                        <div className="text-xs font-bold text-purple-600 bg-purple-100 inline-block px-2 py-1 rounded mb-1">
                                            {inquiry.product}
                                        </div>
                                    )}
                                    <div className="text-gray-700 text-sm max-w-xs">{inquiry.message}</div>
                                </td>
                                <td className="p-4 text-center">
                                    <button
                                        onClick={() => handleDelete(inquiry.id)}
                                        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition"
                                        title="Delete"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {inquiries.length === 0 && (
                    <div className="p-10 text-center text-gray-500">
                        No inquiries found yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminInquiries;
