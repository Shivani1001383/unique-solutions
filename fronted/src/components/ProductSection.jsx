import React from 'react';
import InquiryList from './InquiryList';
import { productData } from '../data';

const ProductSection = ({ openProductModal, inquiryItems, removeFromInquiry, sendInquiry }) => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-12 relative inline-block">
                    Our Products - Select for Inquiry
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-purple-400 w-32 -mb-4"></div>
                </h2>
                <p className="text-xl text-gray-600 mb-12">Click on a product to view items and select quantities.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {productData.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => openProductModal(product)}
                            className="rounded-3xl shadow-2xl overflow-hidden bg-white cursor-pointer transition-all duration-300 hover:shadow-3xl hover:-translate-y-4 group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                                    onError={(e) => { e.target.src = 'https://placehold.co/600x400/purple/white?text=' + encodeURIComponent(product.name); }}
                                />
                            </div>
                            <div className="py-6 bg-purple-50">
                                <h3 className="text-2xl font-bold text-purple-800">{product.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <InquiryList
                    inquiryItems={inquiryItems}
                    removeFromInquiry={removeFromInquiry}
                    sendInquiry={sendInquiry}
                />
            </div>
        </section>
    );
};

export default ProductSection;
