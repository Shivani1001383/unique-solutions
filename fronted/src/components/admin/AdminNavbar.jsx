import React from 'react';

const AdminNavbar = () => {
    return (
        <nav className="bg-white px-6 py-4 shadow-sm flex justify-between items-center sticky top-0 z-10">
            <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
            <div className="flex items-center gap-4">
                <div className="text-right">
                    <p className="text-sm font-semibold text-gray-700">Admin User</p>
                    <p className="text-xs text-gray-500">uniquesolutions3203@gmail.com</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
                    A
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;
