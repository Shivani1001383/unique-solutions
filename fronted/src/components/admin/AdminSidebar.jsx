import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { LayoutDashboard, Package, ShoppingCart, Settings, LogOut, ChevronDown, ChevronRight } from 'lucide-react';
import uniqueLogo from '../../assets/uniqueLogo.png';

const AdminSidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const navItems = [
        { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} />, exact: true },
        {
            name: 'Products',
            icon: <Package size={20} />,
            path: '/admin/products',
            subItems: [
                { name: 'Welding Materials', path: '/admin/products/welding' },
                { name: 'Fasteners & Hardware', path: '/admin/products/fasteners' },
                { name: 'Pipes & Fittings', path: '/admin/products/pipes' },
                { name: 'Bearings', path: '/admin/products/bearings' },
                { name: 'Abrasives', path: '/admin/products/abrasives' },
                { name: 'Safety Gear', path: '/admin/products/safety' },
                { name: 'Electrical', path: '/admin/products/electrical' },
                { name: 'Pneumatics', path: '/admin/products/pneumatics' },
            ]
        },
        { name: 'Orders', path: '/admin/orders', icon: <ShoppingCart size={20} /> },
        { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
    ];

    return (
        <aside className="w-64 bg-purple-600 text-white min-h-screen flex flex-col">
            <div className="p-6 border-b border-purple-800 flex items-center gap-3">
                <img src={uniqueLogo} alt="Unique Solutions Logo" className="w-12 h-12 object-contain bg-white rounded-full p-1" />
                <h1 className="text-xl font-bold">Unique Solutions</h1>
            </div>

            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {navItems.map((item) => (
                    <div key={item.name}>
                        {item.subItems ? (
                            <>
                                <button
                                    onClick={() => toggleDropdown(item.name)}
                                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors text-purple-200 hover:bg-purple-800 hover:text-white ${openDropdown === item.name ? 'bg-purple-800 text-white' : ''}`}
                                >
                                    <div className="flex items-center gap-3">
                                        {item.icon}
                                        <span className="font-medium">{item.name}</span>
                                    </div>
                                    {openDropdown === item.name ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                </button>
                                {openDropdown === item.name && (
                                    <div className="ml-8 mt-2 space-y-1">
                                        {item.subItems.map((sub) => (
                                            <NavLink
                                                key={sub.name}
                                                to={sub.path}
                                                className={({ isActive }) =>
                                                    `block px-3 py-2 text-sm rounded-md transition-colors ${isActive ? 'text-white bg-purple-600' : 'text-purple-300 hover:text-white hover:bg-purple-700'}`
                                                }
                                            >
                                                {sub.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <NavLink
                                to={item.path}
                                end={item.exact}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-purple-700 text-white shadow-md' : 'text-purple-200 hover:bg-purple-800 hover:text-white'}`
                                }
                            >
                                {item.icon}
                                <span className="font-medium">{item.name}</span>
                            </NavLink>
                        )}
                    </div>
                ))}
            </nav>

            <div className="p-4 border-t border-purple-800 space-y-2">
                <NavLink
                    to="/"
                    className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-purple-200 hover:bg-purple-800 hover:text-white transition-colors"
                >
                    <span className="text-xl">🏠</span>
                    <span className="font-medium">Go to Website</span>
                </NavLink>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-purple-200 hover:bg-red-600 hover:text-white transition-colors"
                >
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;
