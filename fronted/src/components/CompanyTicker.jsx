import React from 'react';

const CompanyTicker = () => {
    return (
        <div className="bg-purple-900 overflow-hidden py-6 border-y-4 border-orange-500">
            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 20s linear infinite;
                }
                `}
            </style>
            <div className="whitespace-nowrap overflow-hidden relative">
                <div className="animate-marquee">
                    {(() => {
                        const brands = [
                            { name: "Stanley", logo: "https://logo.clearbit.com/stanleytools.com" },
                            { name: "Facom", logo: "https://logo.clearbit.com/facom.com" },
                            { name: "Proto", logo: "https://logo.clearbit.com/protoindustrial.com" },
                            { name: "Dewalt", logo: "https://logo.clearbit.com/dewalt.com" }
                        ];
                        // Repeat 5 times to ensure continuous flow
                        return [...brands, ...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                            <div key={i} className="mx-12 flex items-center justify-center">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="h-16 md:h-24 w-auto object-contain drop-shadow-lg filter brightness-0 invert"
                                />
                            </div>
                        ));
                    })()}
                </div>
            </div>
        </div>
    );
};

export default CompanyTicker;
