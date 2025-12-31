
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* Header with Purple Gradient Background */}
      <header
        className="bg-gradient-to-b from-purple-900 to-purple-700 text-white py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: 'ur[](https://static.vecteezy.com/system/resources/previews/020/040/564/non_2x/abstract-gradient-purple-background-suitable-for-website-banner-poster-sign-flyer-corporate-business-header-web-social-media-posts-landing-page-billboard-advertising-ads-campaign-free-vector.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl">
            UNIQUE SOLUTIONS
          </h1>

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

      {/* Contact Bar - Only Phone & Email (Address removed, now in footer) */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-50 shadow-lg py-6 px-4">
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
      {/* About Us Section */}
      <section className="py-16 px-4 bg-gray-50">
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


      {/* Our Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-12 relative inline-block">
            Our Products
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-purple-400 w-32 -mb-4"></div>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Your 6 product cards */}
            <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
              <img src="https://www.lawsonproducts.com/cdn/shop/files/DV_ZoomOriginal_I_CW1058A.jpg?v=1738907653&width=1264" alt="Welding Rods" className="w-full h-72 object-cover" />
              <div className="py-6 bg-purple-50"><h3 className="text-2xl font-bold text-purple-800">Welding Rods</h3></div>
            </div>
            <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
              <img src="https://cdn11.bigcommerce.com/s-fd9xotfhbf/images/stencil/1280w/image-manager/banner-main.jpg?t=1731957497" alt="Nuts & Bolts" className="w-full h-72 object-cover" />
              <div className="py-6 bg-purple-50"><h3 className="text-2xl font-bold text-purple-800">Nuts & Bolts</h3></div>
            </div>
            <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
              <img src="https://www.dnow.com/hubfs/WC/Images/Products/Valves%20and%20Actuation/valves_featured-image.jpg" alt="Valves" className="w-full h-72 object-cover" />
              <div className="py-6 bg-purple-50"><h3 className="text-2xl font-bold text-purple-800">Valves</h3></div>
            </div>
            <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
              <img src="https://jcblhandtools.com/wp-content/uploads/2024/12/Guide-to-Workshop-Hand-Tools-2.webp" alt="Tools & Equipment" className="w-full h-72 object-cover" />
              <div className="py-6 bg-purple-50"><h3 className="text-2xl font-bold text-purple-800">Tools & Equipment</h3></div>
            </div>
            <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
              <img src="https://emag.directindustry.com/wp-content/uploads/sites/3/iStock-947254500.jpg" alt="Safety Gear" className="w-full h-72 object-cover" />
              <div className="py-6 bg-purple-50"><h3 className="text-2xl font-bold text-purple-800">Safety Gear</h3></div>
            </div>
            <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
              <img src="https://thumbs.dreamstime.com/b/close-up-precision-planetary-gear-assembly-four-interlocking-steel-gears-central-shaft-showcasing-industrial-413988879.jpg" alt="Machinery Parts" className="w-full h-72 object-cover" />
              <div className="py-6 bg-purple-50"><h3 className="text-2xl font-bold text-purple-800">Machinery Parts</h3></div>
            </div>
          </div>
        </div>
      </section>


      {/* MLA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl  md:text-5xl font-bold text-purple-800 text-center mb-12 relative inline-block">
            Material Categories (MLA)
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-purple-400 w-32 -mb-4"></div>
          </h2>

          <div className="space-y-4">
            {/* Your existing 4 + 5 new categories here */}
            {/* Example of one category */}
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
            {/* Add other 8 categories similarly */}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section
        className="py-16 px-4 text-white"
        style={{
          backgroundImage: 'ur[](https://static.vecteezy.com/system/resources/previews/014/326/271/non_2x/purple-gradient-abstract-background-with-line-and-halftone-element-for-wallpaper-landing-page-or-website-banner-vector.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4 drop-shadow-lg">Get in Touch</h2>
          <p className="text-xl mb-12">Send us your requirement — we will reply quickly!</p>

          <form
            action="https://formspree.io/f/YOUR_FORM_ID_HERE"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl"
          >
            <input type="text" name="name" placeholder="Your Name" required className="px-6 py-4 rounded-lg text-black text-lg border border-purple-300" />
            <input type="tel" name="phone" placeholder="Phone Number" required className="px-6 py-4 rounded-lg text-black text-lg border border-purple-300" />
            <input type="email" name="email" placeholder="Email (optional)" className="px-6 py-4 rounded-lg text-black text-lg border border-purple-300" />
            <input type="text" name="product" placeholder="Product Requirement" className="px-6 py-4 rounded-lg text-black text-lg border border-purple-300" />
            <textarea name="message" placeholder="Message" rows="5" className="md:col-span-2 px-6 py-4 rounded-lg text-black text-lg border border-purple-300"></textarea>
            <button type="submit" className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 rounded-lg text-2xl shadow-lg transition">
              Send Inquiry
            </button>
          </form>

          <a
            href="https://wa.me/918698126118?text=Hello%20Unique%20Solutions,%20I%20need%20information%20about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-green-600 hover:bg-green-700 px-8 py-5 rounded-full text-2xl font-bold transition mt-8"
          >
            <i className="fab fa-whatsapp text-4xl"></i>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer with Address */}
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
        </div>
      </footer>
    </div>
  );
};

export default App;









// import React, { useState } from 'react';

// const App = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
//   const closeMobileMenu = () => setMobileMenuOpen(false);

//   const scrollToSection = (e, id) => {
//     e.preventDefault();
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     closeMobileMenu();
//   };

//   return (
//     <div className="min-h-screen font-sans relative">
//       {/* Fixed Responsive Navbar with MLA */}
//       <nav className="fixed top-0 left-0 right-0 bg-purple-800 text-white shadow-2xl z-60">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="text-2xl md:text-3xl font-extrabold tracking-wider">
//             UNIQUE SOLUTIONS
//           </div>

//           {/* Desktop Menu - MLA Added */}
//           <div className="hidden md:flex space-x-8 text-lg font-semibold">
//             <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-orange-400 transition duration-300">Home</a>
//             <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="hover:text-orange-400 transition duration-300">Products</a>
//             <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-orange-400 transition duration-300">About</a>
//             <a href="#mla" onClick={(e) => scrollToSection(e, 'mla')} className="hover:text-orange-400 transition duration-300">MLA</a>
//             <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-orange-400 transition duration-300">Contact</a>
//           </div>

//           {/* Mobile Hamburger */}
//           <button onClick={toggleMobileMenu} className="md:hidden text-3xl focus:outline-none">
//             ☰
//           </button>
//         </div>

//         {/* Mobile Menu - MLA Added */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-purple-900 px-4 py-6 space-y-4 text-center text-lg font-semibold">
//             <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="block py-2 hover:text-orange-400">Home</a>
//             <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="block py-2 hover:text-orange-400">Products</a>
//             <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block py-2 hover:text-orange-400">About</a>
//             <a href="#mla" onClick={(e) => scrollToSection(e, 'mla')} className="block py-2 hover:text-orange-400">MLA</a>
//             <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block py-2 hover:text-orange-400">Contact</a>
//           </div>
//         )}
//       </nav>

//       {/* Main Content */}
//       <div className="pt-20">
//         {/* Header */}
//         <header id="home" className="bg-gradient-to-b from-purple-900 to-purple-700 text-white py-20 px-4">
//           <div className="max-w-7xl mx-auto text-center">
//             <h1 className="text-5xl top-0 sm:text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl">
//               UNIQUE SOLUTIONS
//             </h1>
//             <p className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-orange-400 mb-8">
//               ALL TYPES OF INDUSTRIAL MATERIAL SUPPLIER
//             </p>
//             <div className="bg-purple-800 inline-block px-6 py-3 rounded-full font-semibold shadow-xl">
//               GSTIN: 27BXVPP7133C1Z3
//             </div>
//           </div>
//         </header>

//         {/* Contact Bar */}
//         <div className="bg-gradient-to-r from-gray-100 to-gray-50 shadow-lg py-6 px-4">
//           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
//             <div className="flex items-center justify-center gap-4">
//               <span className="text-4xl">📞</span>
//               <p className="text-xl font-bold text-purple-900">+91 86981 26118</p>
//             </div>
//             <div className="flex items-center justify-center gap-4">
//               <span className="text-4xl">✉️</span>
//               <p className="text-lg font-bold text-purple-900 break-all">uniquesolutions3203@gmail.com</p>
//             </div>
//           </div>
//         </div>

//         {/* Products Section - All 6 images added */}
//         <section id="products" className="py-16 px-4 bg-white">
//           <div className="max-w-7xl mx-auto text-center">
//             <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-12">Our Products</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//               <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
//                 <img src="https://www.lawsonproducts.com/cdn/shop/files/DV_ZoomOriginal_I_CW1058A.jpg?v=1738907653&width=1264" alt="Welding Rods" className="w-full h-72 object-cover" />
//                 <div className="py-6 bg-purple-50"><h3 className="text-2xl font-bold text-purple-800">Welding Rods</h3></div>
//               </div>
//               <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
//                 <img src="https://cdn11.bigcommerce.com/s-fd9xotfhbf/images/stencil/1280w/image-manager/banner-main.jpg?t=1731957497" alt="Nuts & Bolts" className="w-full h-72 object-cover" />
//                 <div className="py-6 bg-purple-50"><h3 className="text-2xl font-bold text-purple-800">Nuts & Bolts</h3></div>
//               </div>
//               <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
//                 <img src="https://www.dnow.com/hubfs/WC/Images/Products/Valves%20and%20Actuation/valves_featured-image.jpg" alt="Valves" className="w-full h-72 object-cover" />
//                 <div className="py-6 bg-purple-50"><h3 className="text-2xl font-bold text-purple-800">Valves</h3></div>
//               </div>
//               <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
//                 <img src="https://jcblhandtools.com/wp-content/uploads/2024/12/Guide-to-Workshop-Hand-Tools-2.webp" alt="Tools & Equipment" className="w-full h-72 object-cover" />
//                 <div className="py-6 bg-purple-50"><h3 className="text-2xl font-bold text-purple-800">Tools & Equipment</h3></div>
//               </div>
//               <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
//                 <img src="https://emag.directindustry.com/wp-content/uploads/sites/3/iStock-947254500.jpg" alt="Safety Gear" className="w-full h-72 object-cover" />
//                 <div className="py-6 bg-purple-50"><h3 className="text-2xl font-bold text-purple-800">Safety Gear</h3></div>
//               </div>
//               <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
//                 <img src="https://thumbs.dreamstime.com/b/close-up-precision-planetary-gear-assembly-four-interlocking-steel-gears-central-shaft-showcasing-industrial-413988879.jpg" alt="Machinery Parts" className="w-full h-72 object-cover" />
//                 <div className="py-6 bg-purple-50"><h3 className="text-2xl font-bold text-purple-800">Machinery Parts</h3></div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* About Us Section */}
//         <section id="about" className="py-16 px-4 bg-gray-50">
//           <div className="max-w-7xl mx-auto text-center">
//             <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-12">About Us</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//               <div className="text-left text-lg text-gray-700 space-y-6">
//                 <p><strong>Unique Solutions</strong> is a reliable and trusted supplier of all types of industrial materials, based in Chhatrapati Sambhajinagar (Aurangabad), Maharashtra.</p>
//                 <p>We provide high-quality products including welding rods, nuts & bolts, valves, tools, safety gear, machinery parts, pipes, bearings, cutting tools, abrasives, lubricants, and much more.</p>
//                 <p>Our commitment is to deliver the right material at the right time, with competitive pricing and outstanding customer service.</p>
//                 <p>With over 5 years of experience and more than 100 satisfied customers, we take pride in building long-term relationships based on trust and quality.</p>
//               </div>
//               <div>
//                 <img src="https://media.istockphoto.com/id/1390717518/photo/people-working-in-a-large-distribution-warehouse.jpg?s=612x612&w=0&k=20&c=UuzBAfsHfpNWHenn7MQoCG4I3gGCAdhGHCduuiqUsM8=" alt="Team" className="rounded-3xl shadow-2xl w-full object-cover h-96" />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* MLA Section - All 9 categories with images not needed, but full list */}
//         <section id="mla" className="py-16 px-4 bg-white">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-4xl md:text-5xl font-bold text-purple-800 text-center mb-12">Material Categories (MLA)</h2>
//             <div className="space-y-4">
//               {/* 1 to 9 categories - full list as before */}
//               {/* Example first one */}
//               <details className="group bg-white rounded-2xl shadow-lg overflow-hidden">
//                 <summary className="flex justify-between items-center px-8 py-6 text-2xl font-bold text-purple-800 cursor-pointer hover:bg-purple-50">
//                   Welding Materials <span className="text-3xl group-open:rotate-180 transition">▼</span>
//                 </summary>
//                 <div className="px-8 pb-8 bg-purple-50">
//                   <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
//                     <li>⚡ Mild Steel Electrodes</li>
//                     <li>⚡ Stainless Steel Rods</li>
//                     <li>⚡ Cast Iron Electrodes</li>
//                     <li>⚡ MIG Wires</li>
//                     <li>⚡ TIG Filler Rods</li>
//                     <li>⚡ Flux Cored Wires</li>
//                   </ul>
//                 </div>
//               </details>
//               {/* Add the other 8 categories in the same format */}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-16 px-4 text-white" style={{ backgroundImage: 'ur[](https://static.vecteezy.com/system/resources/previews/014/326/271/non_2x/purple-gradient-abstract-background-vector.jpg)', backgroundSize: 'cover' }}>
//           {/* Your form and WhatsApp button */}
//         </section>

//         {/* Footer */}
//         <footer className="bg-purple-900 text-white py-12 text-center">
//           <div className="max-w-7xl mx-auto px-4">
//             <p className="text-2xl font-bold mb-6">UNIQUE SOLUTIONS</p>
//             <div className="flex items-center justify-center gap-4 mb-6">
//               <span className="text-4xl">📍</span>
//               <p className="text-lg leading-relaxed">
//                 Gut No. 240, Aaptgaon,<br />
//                 Beed By Pass Road,<br />
//                 Chhatrapati Sambhajinagar - 431 001<br />
//                 Maharashtra, India
//               </p>
//             </div>
//             <p className="text-lg mt-8">© 2025 Unique Solutions. All Rights Reserved.</p>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default App;