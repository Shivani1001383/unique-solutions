import React from 'react';
import uniqueLogo from '../assets/uniqueLogo.png';

const Header = () => {
    return (
        <header
            className="bg-gradient-to-b from-purple-600 to-purple-400 text-white py-16 px-4 relative overflow-hidden"
            style={{
                // backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/020/040/564/non_2x/abstract-gradient-purple-background-suitable-for-website-banner-poster-sign-flyer-corporate-business-header-web-social-media-posts-landing-page-billboard-advertising-ads-campaign-free-vector.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                    <img
                        src={uniqueLogo}
                        alt="Unique Solutions Logo"
                        className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl bg-white rounded-full p-2"
                    />
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-2xl">
                        UNIQUE SOLUTIONS
                    </h1>
                </div>

                <div className="relative inline-block mb-8">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-orange-400 drop-shadow-lg">
                        ALL TYPES OF INDUSTRIAL MATERIAL SUPPLIER
                    </p>
                    <div className="absolute left-0 right-0 bottom-0 underline h-1 bg-orange-500"></div>
                </div>

                <div className="bg-purple-800  px-6 py-3 rounded-full font-semibold shadow-xl border border-purple-400">
                    GSTIN : 27BXVPP7133C1Z3
                </div>
            </div>
        </header>
    );
};

export default Header;
