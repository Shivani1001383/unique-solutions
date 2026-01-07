import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Package, Edit, Trash2, Plus, X, Save } from 'lucide-react';

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        img: '',
        items: '',
        companies: ''
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/products`);
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const openAddModal = () => {
        setEditingProduct(null);
        setFormData({ id: products.length + 1, name: '', img: '', items: '', companies: '' });
        setShowModal(true);
    };

    const openEditModal = (product) => {
        setEditingProduct(product);
        setFormData({
            id: product.id,
            name: product.name,
            img: product.img,
            items: product.items.join(', '),
            companies: product.companies.join(', ')
        });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingProduct(null);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await axios.delete(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/products/${id}`);
                fetchProducts();
            } catch (error) {
                console.error('Error deleting product:', error);
                alert('Failed to delete product');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...formData,
                items: formData.items.split(',').map(item => item.trim()).filter(Boolean),
                companies: formData.companies.split(',').map(company => company.trim()).filter(Boolean)
            };

            if (editingProduct) {
                await axios.put(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/products/${editingProduct.id}`, payload);
            } else {
                await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/products`, payload);
            }
            closeModal();
            fetchProducts();
        } catch (error) {
            console.error('Error saving product:', error);
            alert('Failed to save product');
        }
    };

    if (loading) return <div className="p-10 text-center">Loading Products...</div>;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                    <Package className="text-purple-600" />
                    Product Management
                </h1>
                <button
                    onClick={openAddModal}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition shadow-lg"
                >
                    <Plus size={20} />
                    Add New Product
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-purple-50 text-purple-900">
                        <tr>
                            <th className="p-4 font-bold border-b">ID</th>
                            <th className="p-4 font-bold border-b">Image</th>
                            <th className="p-4 font-bold border-b">Name</th>
                            <th className="p-4 font-bold border-b text-center">Items</th>
                            <th className="p-4 font-bold border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50 transition">
                                <td className="p-4 font-semibold text-gray-600">#{product.id}</td>
                                <td className="p-4">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-16 h-16 object-cover rounded-lg shadow-sm border"
                                    />
                                </td>
                                <td className="p-4 font-bold text-gray-800 text-lg">{product.name}</td>
                                <td className="p-4 text-center">
                                    <span className="bg-purple-100 text-purple-700 py-1 px-3 rounded-full text-sm font-bold">
                                        {product.items.length} Items
                                    </span>
                                </td>
                                <td className="p-4 text-center">
                                    <div className="flex justify-center gap-3">
                                        <button
                                            onClick={() => openEditModal(product)}
                                            className="text-blue-500 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-full transition"
                                        >
                                            <Edit size={20} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {products.length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                        No products found. Check if the backend is running or database is seeded.
                    </div>
                )}
            </div>

            {/* Modal for Add/Edit */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in">
                        <div className="bg-purple-700 p-4 flex justify-between items-center text-white">
                            <h2 className="text-xl font-bold">{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
                            <button onClick={closeModal} className="hover:bg-purple-600 p-1 rounded-full"><X size={24} /></button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Product ID</label>
                                <input
                                    type="number"
                                    name="id"
                                    value={formData.id}
                                    onChange={handleInputChange}
                                    disabled={!!editingProduct}
                                    className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                <input
                                    type="text"
                                    name="img"
                                    value={formData.img}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Items (Comma separated)</label>
                                <textarea
                                    name="items"
                                    value={formData.items}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none h-20"
                                    placeholder="Bolt, Nut, Screw"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Companies (Comma separated)</label>
                                <textarea
                                    name="companies"
                                    value={formData.companies}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none h-20"
                                    placeholder="Tata, Jindal, Essar"
                                />
                            </div>
                            <div className="flex justify-end gap-3 pt-4">
                                <button type="button" onClick={closeModal} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
                                <button type="submit" className="bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-800 transition">
                                    <Save size={18} />
                                    Save Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminProducts;
