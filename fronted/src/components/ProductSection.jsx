import React from 'react';
import InquiryList from './InquiryList';
import { productData } from '../data';

const ProductSection = ({ openProductModal, inquiryItems, removeFromInquiry, sendInquiry }) => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/products`);
            const data = await response.json();
            if (data && data.length > 0) {
                setProducts(data);
            } else {
                setProducts(productData);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setProducts(productData);
            setLoading(false);
        }
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <div className="text-center py-20 text-xl font-bold text-gray-500">Loading Products...</div>;

    return (
        <section id="products" className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-12 relative inline-block">
                    Our Products - Select for Inquiry
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-purple-400 w-32 -mb-4"></div>
                </h2>

                <div className="max-w-md mx-auto mb-10">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md transition-all"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {products.length === 0 ? (
                    <p className="text-xl text-gray-600 mb-12">No products available.</p>
                ) : filteredProducts.length === 0 ? (
                    <p className="text-xl text-gray-600 mb-12">No products found matching "{search}".</p>
                ) : (
                    <p className="text-xl text-gray-600 mb-12">Click on a product to view items and select quantities.</p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProducts.map((product) => (
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
