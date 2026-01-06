import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-purple-900 text-white py-12 text-center">
            <div className="max-w-7xl mx-auto px-4">
                {/* <p className="text-2xl font-bold mb-6">UNIQUE SOLUTIONS</p> */}

                <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="text-4xl">📍</span>
                    <p className="text-lg leading-relaxed">
                        Gut No. 240, Aaptgaon,<br />
                        Beed By Pass Road,<br />
                        Chhatrapati Sambhajinagar - 431 001<br />
                        Maharashtra, India
                    </p>
                </div>

                <p className="text-lg mt-8">© 2025 Unique Solutions. All Rights Reserved.</p>
                <p className="text-lg mt-6">
                    <a
                        href="https://maps.google.com/maps?q=Gut+No.+240,+Aaptgaon,+Beed+By+Pass+Road,+Chhatrapati+Sambhajinagar,+Maharashtra+431001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white-700 hover:bg-white-600 px-6 py-3 rounded-full font-bold transition"
                    >
                        📍 View Location on Google Maps
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
