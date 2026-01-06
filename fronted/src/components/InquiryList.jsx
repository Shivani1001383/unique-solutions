import React from 'react';

const InquiryList = ({ inquiryItems, removeFromInquiry, sendInquiry }) => {
    if (inquiryItems.length === 0) return null;

    return (
        <div className="mt-16 bg-purple-50 rounded-3xl p-8 shadow-inner border border-purple-200">
            <h3 className="text-3xl font-bold text-purple-900 mb-6">Your Inquiry List</h3>

            <div className="overflow-x-auto">
                <table className="w-full text-left bg-white rounded-xl overflow-hidden shadow-sm">
                    <thead className="bg-purple-800 text-white">
                        <tr>
                            <th className="p-4">Category</th>
                            <th className="p-4">Item</th>
                            <th className="p-4">Quantity</th>
                            <th className="p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-100">
                        {inquiryItems.map((item, index) => (
                            <tr key={index} className="hover:bg-purple-50">
                                <td className="p-4 font-semibold text-purple-900">{item.category}</td>
                                <td className="p-4 text-gray-700">{item.item}</td>
                                <td className="p-4 font-bold text-orange-600">{item.quantity}</td>
                                <td className="p-4">
                                    <button
                                        onClick={() => removeFromInquiry(index)}
                                        className="text-red-500 hover:text-red-700 font-bold hover:underline"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 flex justify-end">
                <button
                    onClick={sendInquiry}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full text-2xl shadow-lg transition transform hover:scale-105"
                >
                    Send Inquiry Now
                </button>
            </div>
        </div>
    );
};

export default InquiryList;
