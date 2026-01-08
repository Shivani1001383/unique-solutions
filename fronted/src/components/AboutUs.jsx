import React from 'react';

const AboutUs = () => {
    return (
        <section id="about" className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-12 relative inline-block">
                    About Us
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-purple-400 w-32 -mb-4"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-left text-lg text-gray-700 space-y-6">
                        <p>
                            <strong>Unique Solutions</strong> is a reliable and trusted supplier of all types of industrial materials, based in Chhatrapati Sambhajinagar (Aurangabad), Maharashtra.
                        </p>
                        <p>
                            We provide high-quality products including welding rods, nuts & bolts, valves, tools, safety gear, machinery parts, pipes, bearings, cutting tools, abrasives, lubricants, and much more.
                        </p>
                        <p>
                            Our commitment is to deliver the right material at the right time, with competitive pricing and outstanding customer service.
                        </p>
                        <p>
                            With over 5 years of experience and more than 100 satisfied customers, we take pride in building long-term relationships based on trust and quality.
                        </p>
                    </div>

                    <div>
                        <img
                            src="https://media.istockphoto.com/id/1390717518/photo/people-working-in-a-large-distribution-warehouse.jpg?s=612x612&w=0&k=20&c=UuzBAfsHfpNWHenn7MQoCG4I3gGCAdhGHCduuiqUsM8="
                            alt="Unique Solutions Warehouse Team"
                            className="rounded-3xl shadow-2xl w-full object-cover h-96"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
