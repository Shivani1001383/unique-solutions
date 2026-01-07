import React, { useState } from 'react';
import { Settings, Save, Lock, User, RefreshCw } from 'lucide-react';

const AdminSettings = () => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newUsername: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: '', message: '' });

        if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
            setStatus({ type: 'error', message: 'New passwords do not match' });
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth/update`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    currentPassword: formData.currentPassword,
                    newUsername: formData.newUsername,
                    newPassword: formData.newPassword
                })
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ type: 'success', message: 'Credentials updated successfully!' });
                setFormData({ currentPassword: '', newUsername: '', newPassword: '', confirmPassword: '' });
            } else {
                setStatus({ type: 'error', message: data.message || 'Update failed' });
            }
        } catch (error) {
            console.error('Update error:', error);
            setStatus({ type: 'error', message: 'Server error. Ensure backend is running.' });
        }
        setLoading(false);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <Settings className="text-purple-600" />
                Account Settings
            </h1>

            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
                <h2 className="text-xl font-semibold mb-6 text-gray-700 border-b pb-4">Update Credentials</h2>

                {status.message && (
                    <div className={`p-4 rounded-lg mb-6 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {status.message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Current Password - Required for any change */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Password (Required)</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="password"
                                name="currentPassword"
                                value={formData.currentPassword}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                                required
                                placeholder="Enter current password to make changes"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        {/* New Username */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">New Username (Optional)</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    name="newUsername"
                                    value={formData.newUsername}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                                    placeholder="Leave blank to keep same"
                                />
                            </div>
                        </div>

                        {/* New Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">New Password (Optional)</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                                    placeholder="Leave blank to keep same"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Confirm New Password */}
                    {formData.newPassword && (
                        <div className="animate-fade-in">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                                    required
                                    placeholder="Confirm new password"
                                />
                            </div>
                        </div>
                    )}

                    <div className="pt-6 border-t mt-4 flex justify-end">
                        <button
                            type="submit"
                            disabled={loading || !formData.currentPassword}
                            className={`flex items-center gap-2 px-6 py-2 rounded-lg text-white font-medium transition shadow-lg
                                ${loading || !formData.currentPassword ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}
                            `}
                        >
                            {loading ? <RefreshCw className="animate-spin" size={20} /> : <Save size={20} />}
                            Update Settings
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminSettings;
