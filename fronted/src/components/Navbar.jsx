
import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top Section - Logo, Contact Info, GST */}
                <div className="flex flex-col md:flex-row justify-between items-center py-4">
                    {/* Left Side - Company Name and Tagline */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h1 className="text-3xl font-bold text-gray-800">
                            UNIQUE SOLUTIONS
                        </h1>
                        <p className="text-lg text-gray-600 font-medium">
                            All Types of Industrial Material Supplier
                        </p>
                    </div>

                    {/* Right Side - Contact Info and GST */}
                    <div className="text-center md:text-right">
                        <div className="mb-2">
                            <a
                                href="tel:+918698126118"
                                className="text-xl font-bold text-purple-800 hover:text-purple-600"
                            >
                                +91 86981 26118
                            </a>
                        </div>
                        <div className="mb-2">
                            <span className="text-lg font-bold text-purple-700">
                                GSTIN : 278XVPPTJ33C123
                            </span>
                        </div>
                        <div>
                            <a
                                href="mailto:uniquesolutions3203@gmail.com"
                                className="text-lg font-semibold text-gray-700 hover:text-purple-600"
                            >
                                uniquesolutions3203@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Navigation Links Bar */}
                <div className="border-t border-gray-300 pt-3 pb-3">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        {/* Navigation Links */}
                        <div className="hidden md:flex space-x-8">
                            <a
                                href="#home"
                                className="text-gray-700 hover:text-purple-700 font-semibold text-lg py-2 border-b-2 border-transparent hover:border-purple-600 transition"
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="text-gray-700 hover:text-purple-700 font-semibold text-lg py-2 border-b-2 border-transparent hover:border-purple-600 transition"
                            >
                                About Us
                            </a>
                            <a
                                href="#products"
                                className="text-gray-700 hover:text-purple-700 font-semibold text-lg py-2 border-b-2 border-transparent hover:border-purple-600 transition"
                            >
                                Our Products
                            </a>
                            <a
                                href="#categories"
                                className="text-gray-700 hover:text-purple-700 font-semibold text-lg py-2 border-b-2 border-transparent hover:border-purple-600 transition"
                            >
                                Material Categories
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-700 hover:text-purple-700 font-semibold text-lg py-2 border-b-2 border-transparent hover:border-purple-600 transition"
                            >
                                Get in Touch
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-700 self-end"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="md:hidden bg-white py-4 space-y-3">
                            <a
                                href="#home"
                                className="block py-2 text-gray-700 hover:text-purple-700 font-semibold text-lg border-l-4 border-transparent hover:border-purple-600 pl-4"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="block py-2 text-gray-700 hover:text-purple-700 font-semibold text-lg border-l-4 border-transparent hover:border-purple-600 pl-4"
                                onClick={() => setMenuOpen(false)}
                            >
                                About Us
                            </a>
                            <a
                                href="#products"
                                className="block py-2 text-gray-700 hover:text-purple-700 font-semibold text-lg border-l-4 border-transparent hover:border-purple-600 pl-4"
                                onClick={() => setMenuOpen(false)}
                            >
                                Our Products
                            </a>
                            <a
                                href="#categories"
                                className="block py-2 text-gray-700 hover:text-purple-700 font-semibold text-lg border-l-4 border-transparent hover:border-purple-600 pl-4"
                                onClick={() => setMenuOpen(false)}
                            >
                                Material Categories
                            </a>
                            <a
                                href="#contact"
                                className="block py-2 text-gray-700 hover:text-purple-700 font-semibold text-lg border-l-4 border-transparent hover:border-purple-600 pl-4"
                                onClick={() => setMenuOpen(false)}
                            >
                                Get in Touch
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
