import React from 'react';

const MLACategories = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl  md:text-5xl font-bold text-purple-800 text-center mb-12 relative inline-block">
                    Material Categories (MLA)
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-purple-400 w-32 -mb-4"></div>
                </h2>

                <div className="space-y-4">
                    {/* Welding Materials */}
                    <details className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <summary className="flex justify-between items-center px-8 py-6 text-2xl font-bold text-purple-800 cursor-pointer hover:bg-purple-50 transition">
                            Welding Materials
                            <span className="text-3xl group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="px-8 pb-8 bg-purple-50">
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-gray-700">
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Mild Steel Electrodes</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Stainless Steel Rods</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Cast Iron Electrodes</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> MIG Wires</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> TIG Filler Rods</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Flux Cored Wires</li>
                            </ul>
                        </div>
                    </details>
                    {/* 2. Fasteners & Hardware */}
                    <details className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <summary className="flex justify-between items-center px-8 py-6 text-2xl font-bold text-purple-800 cursor-pointer hover:bg-purple-50 transition">
                            Fasteners & Hardware
                            <span className="text-3xl group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="px-8 pb-8 bg-purple-50">
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-gray-700">
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Hex Bolts & Nuts</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Anchor Fasteners</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Studs & Threaded Rods</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Washers (All Types)</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Screws (Self-Tapping, Machine)</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Rivets & Circlips</li>
                            </ul>
                        </div>
                    </details>
                    {/* 3. Pipes, Tubes & Fittings */}
                    <details className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <summary className="flex justify-between items-center px-8 py-6 text-2xl font-bold text-purple-800 cursor-pointer hover:bg-purple-50 transition">
                            Pipes, Tubes & Fittings
                            <span className="text-3xl group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="px-8 pb-8 bg-purple-50">
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-gray-700">
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> MS & GI Pipes</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Seamless Pipes</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> PVC & CPVC Pipes</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Elbows, Tees & Reducers</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Flanges (All Grades)</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Pipe Clamps & Supports</li>
                            </ul>
                        </div>
                    </details>

                    {/* 4. Bearings & Power Transmission */}
                    <details className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <summary className="flex justify-between items-center px-8 py-6 text-2xl font-bold text-purple-800 cursor-pointer hover:bg-purple-50 transition">
                            Bearings & Power Transmission
                            <span className="text-3xl group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="px-8 pb-8 bg-purple-50">
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-gray-700">
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Ball Bearings</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Roller & Taper Bearings</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Pillow Block Units</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> V-Belts & Pulleys</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Chains & Sprockets</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Couplings & Gearboxes</li>
                            </ul>
                        </div>
                    </details>

                    {/* 5. Abrasives & Cutting Tools */}
                    <details className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <summary className="flex justify-between items-center px-8 py-6 text-2xl font-bold text-purple-800 cursor-pointer hover:bg-purple-50 transition">
                            Abrasives & Cutting Tools
                            <span className="text-3xl group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="px-8 pb-8 bg-purple-50">
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-gray-700">
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Grinding Wheels</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Cutting Wheels</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Flap Discs</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Drill Bits (HSS & Carbide)</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Taps & Dies</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Hacksaw & Bandsaw Blades</li>
                            </ul>
                        </div>
                    </details>

                    {/* 6. Safety Gear & PPE (New) */}
                    <details className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <summary className="flex justify-between items-center px-8 py-6 text-2xl font-bold text-purple-800 cursor-pointer hover:bg-purple-50 transition">
                            Safety Gear & PPE
                            <span className="text-3xl group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="px-8 pb-8 bg-purple-50">
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-gray-700">
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Safety Helmets</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Safety Gloves</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Safety Goggles</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Ear Protection</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Safety Shoes</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Full Body Harness</li>
                            </ul>
                        </div>
                    </details>

                    {/* 7. Electrical Items (New) */}
                    <details className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <summary className="flex justify-between items-center px-8 py-6 text-2xl font-bold text-purple-800 cursor-pointer hover:bg-purple-50 transition">
                            Electrical Items
                            <span className="text-3xl group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="px-8 pb-8 bg-purple-50">
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-gray-700">
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Industrial Cables</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Switches & Sockets</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> MCB & MCCB</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Control Panels</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Wires & Conduits</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> LED Industrial Lights</li>
                            </ul>
                        </div>
                    </details>

                    {/* 8. Pneumatics & Hydraulics (New) */}
                    <details className="group bg-white rounded-2xl shadow-lg overflow-hidden">
                        <summary className="flex justify-between items-center px-8 py-6 text-2xl font-bold text-purple-800 cursor-pointer hover:bg-purple-50 transition">
                            Pneumatics & Hydraulics
                            <span className="text-3xl group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="px-8 pb-8 bg-purple-50">
                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-gray-700">
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Pneumatic Cylinders</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Air Compressors</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> FRL Units</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Hydraulic Hoses</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Quick Couplers</li>
                                <li className="flex items-center gap-3"><span className="text-orange-500">⚡</span> Valves & Fittings</li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default MLACategories;
