import React from 'react';

const brandList = [
    { name: 'Mangalam', logo: 'https://logo.clearbit.com/hilti.com' },
    { name: 'PIX', logo: 'https://logo.clearbit.com/pixtrans.com' },
    { name: 'CUMI', logo: 'https://logo.clearbit.com/cumi-murugappa.com' },
    { name: 'Unbrako', logo: 'https://logo.clearbit.com/unbrako.com' },
    { name: 'STANLEY', logo: 'https://logo.clearbit.com/stanleytools.com' },
    { name: 'FACOM', logo: 'https://logo.clearbit.com/facom.com' },
    { name: 'PROTO', logo: 'https://logo.clearbit.com/protoindustrial.com' },
    { name: 'DEWALT', logo: 'https://logo.clearbit.com/dewalt.com' },
];

const brands = [...brandList, ...brandList, ...brandList]; // Tripled for seamless scrolling

const AuthorisedDealers = () => {
    return (
        <section className="py-12 bg-gray-50 overflow-hidden relative border-y border-gray-200">
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-12 relative inline-block">
                    Authorised Dealer For
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); } /* Exact 1/3 shift for seamless loop */
                }
                .logo-slider {
                    display: flex;
                    width: max-content; /* Dynamically fits all content */
                    animation: scroll 30s linear infinite; /* Adjusted speed for longer list */
                }
                .logo-slider:hover {
                    animation-play-state: paused;
                }
                /* Gradient Masks for fade effect */
                .fade-mask {
                    background: linear-gradient(to right, rgba(249,250,251,1) 0%, rgba(249,250,251,0) 10%, rgba(249,250,251,0) 90%, rgba(249,250,251,1) 100%);
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    pointer-events: none;
                    z-index: 10;
                }
                `}
            </style>

            <div className="relative w-full overflow-hidden">
                <div className="logo-slider flex items-center">
                    {brands.map((brand, index) => (
                        <div key={index} className="flex-none w-[50vw] md:w-[20vw] px-4 md:px-8 flex justify-center items-center">
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-full h-32 flex items-center justify-center border border-gray-100 group">
                                <img
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    className="max-h-16 md:max-h-20 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerText = brand.name;
                                        e.target.parentElement.className = "flex items-center justify-center w-full h-full text-gray-500 font-bold text-xl";
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="fade-mask"></div>
            </div>
        </section>
    );
};

export default AuthorisedDealers;
