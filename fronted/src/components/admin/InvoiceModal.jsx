import React, { useState, useEffect } from 'react';

const InvoiceModal = ({ isOpen, onClose, initialData }) => {
    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().slice(0, 10));
    const [items, setItems] = useState([{ product: '', quantity: 1, rate: 0, amount: 0 }]);
    const [invoiceNumber, setInvoiceNumber] = useState(null);

    useEffect(() => {
        if (isOpen) {
            fetchNextInvoiceNumber();
            if (initialData) {
                setCustomerName(initialData.name || '');
                // Address could be added if available in inquiry, currently assuming not in inquiry object structure seen
                if (initialData.product) {
                    setItems([{ product: initialData.product, quantity: 1, rate: 0, amount: 0 }]);
                }
            } else {
                // Reset fields if opening fresh (optional, but good practice)
                setCustomerName('');
                setCustomerAddress('');
                setItems([{ product: '', quantity: 1, rate: 0, amount: 0 }]);
            }
        }
    }, [isOpen, initialData]);

    const fetchNextInvoiceNumber = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/invoices/next`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            const data = await res.json();
            setInvoiceNumber(data.nextInvoiceNumber);
        } catch (error) {
            console.error('Error fetching invoice number:', error);
        }
    };

    const handleSaveAndPrint = async () => {
        if (!customerName.trim()) {
            alert('Please enter a Customer Name and Product.');
            return;
        }
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/invoices`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    invoiceNumber,
                    customerName,
                    customerAddress,
                    date: invoiceDate,
                    items: items.map(item => ({ ...item, product: item.product, quantity: item.quantity, rate: item.rate, amount: item.quantity * item.rate })),
                    totalAmount: calculateTotal()
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to save invoice');
            }

            window.print();
            onClose();
        } catch (error) {
            console.error('Error saving invoice:', error);
            alert(`Error: ${error.message}`);
        }
    };

    if (!isOpen) return null;

    const handleItemChange = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setItems(newItems);
    };

    const addItem = () => {
        setItems([...items, { product: '', quantity: 1, rate: 0 }]);
    };

    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const calculateTotal = () => {
        return items.reduce((total, item) => total + (item.quantity * item.rate), 0);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto print:bg-white print:p-0 print:static">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl p-8 relative print:shadow-none print:w-full print:max-w-none print:p-10">
                {/* Close Button - Hidden when printing */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 print:hidden text-2xl"
                >
                    &times;
                </button>

                {/* Invoice Header */}
                <div className="flex justify-between items-start mb-8 border-b pb-6">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800">INVOICE</h1>
                        <div className="flex items-center gap-2 mt-2">
                            <label className="font-bold text-gray-700">Invoice No:</label>
                            <input
                                type="text"
                                value={invoiceNumber || ''}
                                readOnly
                                className="border rounded p-1 w-32 bg-gray-50 text-gray-700 font-bold"
                            />
                        </div>
                    </div>
                    <div className="text-right">
                        <h2 className="text-xl font-bold text-dark-700">Unique Solutions</h2>
                        <p className="text-gray-600">Gut No. 240, Apatgoan, Beed By Pass Road</p>
                        <p className="text-gray-600">Chhatrapati Sambhajinagar, Maharashtra, India</p>
                        <p className="text-gray-600">Phone: +91 8698126118</p>
                    </div>
                </div>

                {/* Customer & Date Details */}
                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2 print:hidden">Bill To:</label>
                        <p className="text-gray-700 font-bold mb-1 hidden print:block">Bill To:</p>
                        <input
                            type="text"
                            placeholder="Customer Name"
                            className="w-full border rounded p-2 mb-2 print:hidden"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                        <div className="hidden print:block font-semibold text-lg">{customerName}</div>

                        <textarea
                            placeholder="Customer Address"
                            className="w-full border rounded p-2 print:hidden"
                            rows="3"
                            value={customerAddress}
                            onChange={(e) => setCustomerAddress(e.target.value)}
                        />
                        <div className="hidden print:block whitespace-pre-wrap">{customerAddress}</div>
                    </div>
                    <div className="text-right">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2 print:hidden">Date:</label>
                            <span className="hidden print:inline-block font-bold mr-2">Date:</span>
                            <input
                                type="date"
                                className="border rounded p-2 print:border-none print:p-0 print:text-right"
                                value={invoiceDate}
                                onChange={(e) => setInvoiceDate(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Items Table */}
                <table className="w-full mb-8 border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b-2 border-gray-300">
                            <th className="text-left p-3 font-bold text-gray-700">Product Description</th>
                            <th className="text-right p-3 font-bold text-gray-700 w-24">Qty</th>
                            <th className="text-right p-3 font-bold text-gray-700 w-32">Rate (₹)</th>
                            <th className="text-right p-3 font-bold text-gray-700 w-32">Amount (₹)</th>
                            <th className="w-10 print:hidden"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index} className="border-b border-gray-200">
                                <td className="p-2">
                                    <input
                                        type="text"
                                        className="w-full p-1 border rounded print:border-none print:p-0"
                                        placeholder="Item Name"
                                        value={item.product}
                                        onChange={(e) => handleItemChange(index, 'product', e.target.value)}
                                    />
                                </td>
                                <td className="p-2">
                                    <input
                                        type="number"
                                        className="w-full p-1 border rounded text-right print:border-none print:p-0"
                                        value={item.quantity}
                                        min="1"
                                        onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value) || 0)}
                                    />
                                </td>
                                <td className="p-2">
                                    <input
                                        type="number"
                                        className="w-full p-1 border rounded text-right print:border-none print:p-0"
                                        value={item.rate}
                                        min="0"
                                        onChange={(e) => handleItemChange(index, 'rate', parseFloat(e.target.value) || 0)}
                                    />
                                </td>
                                <td className="p-2 text-right font-medium">
                                    {(item.quantity * item.rate).toFixed(2)}
                                </td>
                                <td className="p-2 text-center print:hidden">
                                    {items.length > 1 && (
                                        <button
                                            onClick={() => removeItem(index)}
                                            className="text-red-500 hover:text-red-700 font-bold"
                                        >
                                            &times;
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Add Item Button */}
                <button
                    onClick={addItem}
                    className="mb-8 text-purple-600 font-semibold hover:text-purple-800 flex items-center print:hidden"
                >
                    <span className="text-xl mr-1">+</span> Add Line Item
                </button>

                {/* Totals */}
                <div className="flex justify-end border-t pt-4">
                    <div className="w-64">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 font-medium">Total Amount:</span>
                            <span className="text-2xl font-bold text-gray-800">₹{calculateTotal().toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Footer / Notes */}
                <div className="mt-12 text-sm text-gray-500 border-t pt-4">
                    <p className="font-semibold">Terms & Conditions:</p>
                    <p>1. Goods once sold will not be taken back.</p>
                    <p>2. Payment due within 30 days.</p>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex justify-end gap-4 print:hidden">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSaveAndPrint}
                        className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium shadow-sm flex items-center"
                    >
                        <span className="mr-2">🖨️</span> Save & Print Invoice
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvoiceModal;
