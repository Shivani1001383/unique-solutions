import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-12 relative inline-block">
                    Why Choose Unique Solutions?
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-purple-400 w-40 -mb-4"></div>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-purple-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
                        <div className="text-6xl mb-6">🚚</div>
                        <h3 className="text-2xl font-bold text-purple-900 mb-4">Fast Delivery</h3>
                        <p className="text-gray-700">Right material at the right time – urgent orders handled promptly across Maharashtra.</p>
                    </div>

                    <div className="bg-purple-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
                        <div className="text-6xl mb-6">🏆</div>
                        <h3 className="text-2xl font-bold text-purple-900 mb-4">Premium Quality</h3>
                        <p className="text-gray-700">Only genuine, branded industrial materials from trusted manufacturers.</p>
                    </div>

                    <div className="bg-purple-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
                        <div className="text-6xl mb-6">💰</div>
                        <h3 className="text-2xl font-bold text-purple-900 mb-4">Competitive Pricing</h3>
                        <p className="text-gray-700">Best rates in the market without compromising on quality.</p>
                    </div>

                    <div className="bg-purple-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
                        <div className="text-6xl mb-6">👨‍💼</div>
                        <h3 className="text-2xl font-bold text-purple-900 mb-4">Expert Support</h3>
                        <p className="text-gray-700">5+ years experience – we guide you to the perfect solution for your needs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
