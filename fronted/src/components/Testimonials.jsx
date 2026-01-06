import React from 'react';

const Testimonials = ({ testimonials, visibleReviews, showMoreReviews }) => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-12 relative inline-block">
                    What Our Clients Say
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-purple-400 w-40 -mb-4"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.slice(0, visibleReviews).map((t, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-shadow duration-300 animate-fade-in-up">
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-purple-800 text-2xl font-bold">
                                        {t.initials}
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-xl font-bold text-purple-900">{t.name}</h4>
                                        {/* <p className="text-gray-600">{t.role}</p> */}
                                    </div>
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed italic">
                                    "{t.text}"
                                </p>
                                <div className="mt-6 flex justify-center gap-1 text-orange-500">
                                    ★★★★★
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-gray-500 font-medium">
                    Showing {Math.min(visibleReviews, testimonials.length)} of {testimonials.length} reviews
                </p>

                {/* View More Button */}
                {testimonials.length > 0 && (
                    <div className="mt-6">
                        <button
                            onClick={showMoreReviews}
                            className="bg-purple-700 hover:bg-purple-800 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg transition"
                        >
                            See More Reviews
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
