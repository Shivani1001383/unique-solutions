import React from 'react';

const ContactBar = () => {
    return (
        <div id="contact" className="bg-gradient-to-r from-gray-100 to-gray-50 shadow-lg py-6 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div className="flex items-center justify-center gap-4">
                    <span className="text-4xl">📞</span>
                    <p className="text-xl font-bold text-purple-900">+91 86981 26118</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <span className="text-4xl">✉️</span>
                    <p className="text-lg font-bold text-purple-900 break-all">uniquesolutions3203@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactBar;
