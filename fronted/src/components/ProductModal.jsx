import React, { useEffect } from 'react';

const ProductModal = ({
    activeProduct,
    closeProductModal,
    selectedCompany,
    setSelectedCompany,
    tempQuantities,
    handleQuantityChange,
    addItemsToInquiry
}) => {
    if (!activeProduct) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
            onClick={closeProductModal}>
            <div
                className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative animate-fade-in-up"
                onClick={e => e.stopPropagation()} // Prevent close on modal click
            >
                {/* Modal Header */}
                <div className="sticky top-0 bg-purple-900 text-white px-8 py-5 flex justify-between items-center z-10">
                    <h3 className="text-2xl font-bold">{activeProduct.name}</h3>
                    <button
                        onClick={closeProductModal}
                        className="text-white hover:text-gray-300 text-3xl font-bold leading-none"
                    >
                        &times;
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-10">
                    <p className="text-gray-600 mb-6 italic">Select items and enter the quantity you need.</p>

                    <div className="mb-11">
                        <label className="block text-purple-900 font-bold mb-2">Select Company:</label>
                        <select
                            className="w-full p-3 rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={selectedCompany}
                            onChange={(e) => setSelectedCompany(e.target.value)}
                        >
                            <option value="">-- Select Company --</option>
                            {activeProduct.companies?.map((company, index) => (
                                <option key={index} value={company}>{company}</option>
                            ))}
                        </select>
                    </div>

                    {selectedCompany && (
                        <div className="space-y-4">
                            {activeProduct.items.map((item, index) => (
                                <div key={index} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition border border-purple-100">
                                    <label className="font-semibold text-purple-900 text-lg mb-2 sm:mb-0 cursor-pointer flex-grow">
                                        {item}
                                    </label>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-gray-500">Qty:</span>
                                        <input
                                            type="number"
                                            min="0"
                                            placeholder="0"
                                            className="w-24 p-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-center font-bold text-gray-700"
                                            value={tempQuantities[item] || ''}
                                            onChange={(e) => handleQuantityChange(item, e.target.value)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Modal Footer */}
                <div className="sticky bottom-0 bg-white p-6 border-t border-gray-100 flex justify-end gap-4">
                    <button
                        onClick={closeProductModal}
                        className="px-6 py-3 rounded-full text-purple-700 font-bold hover:bg-purple-100 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => addItemsToInquiry(activeProduct, selectedCompany, tempQuantities, closeProductModal)}
                        className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full font-bold shadow-lg transition transform hover:scale-105"
                    >
                        Add to Inquiry List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
