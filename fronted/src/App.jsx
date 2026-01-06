
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { productData } from './data';

const App = () => {
  // State for the cart/inquiry list
  // Structure: [{ category: "Welding Rods", item: "MIG Wires", quantity: 5 }]
  const [inquiryItems, setInquiryItems] = useState([]);

  // State for the currently active product (to show in modal)
  const [activeProduct, setActiveProduct] = useState(null);

  // Temporary state for quantities inside the modal
  const [tempQuantities, setTempQuantities] = useState({});

  // Toggle/Open Product Modal
  const openProductModal = (product) => {
    setActiveProduct(product);
    // Initialize temp quantities with 0 or existing cart values if needed
    setTempQuantities({});
  };

  const closeProductModal = () => {
    setActiveProduct(null);
    setTempQuantities({});
  };

  // Handle quantity change in modal
  const handleQuantityChange = (item, value) => {
    if (value < 0) return;
    setTempQuantities(prev => ({
      ...prev,
      [item]: value
    }));
  };

  // Add selected items from modal to main inquiry list
  const addItemsToInquiry = () => {
    if (!activeProduct) return;

    const newItems = [];
    Object.entries(tempQuantities).forEach(([item, quantity]) => {
      if (quantity > 0) {
        newItems.push({
          category: activeProduct.name,
          item: item,
          quantity: parseInt(quantity)
        });
      }
    });

    if (newItems.length === 0) {
      alert("Please select at least one item with quantity greater than 0.");
      return;
    }

    // Merge with existing items (update quantity if already exists, else add)
    setInquiryItems(prevItems => {
      const updatedItems = [...prevItems];
      newItems.forEach(newItem => {
        const existingIndex = updatedItems.findIndex(
          i => i.category === newItem.category && i.item === newItem.item
        );
        if (existingIndex > -1) {
          updatedItems[existingIndex].quantity = newItem.quantity; // Update/Overwrite quantity
        } else {
          updatedItems.push(newItem);
        }
      });
      return updatedItems;
    });

    closeProductModal();
    alert("Items added to inquiry list!");
  };

  // Remove item from inquiry list
  const removeFromInquiry = (indexToRemove) => {
    setInquiryItems(inquiryItems.filter((_, index) => index !== indexToRemove));
  };

  // Send inquiry email
  // Send inquiry via WhatsApp
  const sendInquiry = (e) => {
    e.preventDefault();

    if (inquiryItems.length === 0) {
      alert('Please select products before sending inquiry.');
      return;
    }

    // Format the product list for WhatsApp
    const productLists = inquiryItems.map(
      (item, idx) => `${idx + 1}. ${item.category} - ${item.item} (Qty: ${item.quantity})`
    ).join('\n');

    const message = `Hello Unique Solutions, I would like to inquire about the following items:\n\n${productLists}\n\nPlease provide a quote.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "918698126118"; // User's phone number

    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

    // Optional: Clear selection after sending (or keep it if user wants to check again)
    // setInquiryItems([]); 
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Header with Purple Gradient Background */}

      <header
        className="bg-gradient-to-b from-purple-600 to-purple-400 text-white py-16 px-4 relative overflow-hidden"
        style={{
          // backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/020/040/564/non_2x/abstract-gradient-purple-background-suitable-for-website-banner-poster-sign-flyer-corporate-business-header-web-social-media-posts-landing-page-billboard-advertising-ads-campaign-free-vector.jpg)',
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
            Our Products - Select for Inquiry
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-purple-400 w-32 -mb-4"></div>
          </h2>
          <p className="text-xl text-gray-600 mb-12">Click on a product to view items and select quantities.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {productData.map((product) => (
              <div
                key={product.id}
                onClick={() => openProductModal(product)}
                className="rounded-3xl shadow-2xl overflow-hidden bg-white cursor-pointer transition-all duration-300 hover:shadow-3xl hover:-translate-y-4 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                    onError={(e) => { e.target.src = 'https://placehold.co/600x400/purple/white?text=' + encodeURIComponent(product.name); }}
                  />
                  {/* Overlay removed for debugging */}
                </div>
                <div className="py-6 bg-purple-50">
                  <h3 className="text-2xl font-bold text-purple-800">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Cart / Inquiry Summary Section */}
          {inquiryItems.length > 0 && (
            <div className="mt-16 bg-purple-50 rounded-3xl p-8 shadow-inner border border-purple-200">
              <h3 className="text-3xl font-bold text-purple-900 mb-6">Your Inquiry List</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead className="bg-purple-800 text-white">
                    <tr>
                      <th className="p-4">Category</th>
                      <th className="p-4">Item</th>
                      <th className="p-4">Quantity</th>
                      <th className="p-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-100">
                    {inquiryItems.map((item, index) => (
                      <tr key={index} className="hover:bg-purple-50">
                        <td className="p-4 font-semibold text-purple-900">{item.category}</td>
                        <td className="p-4 text-gray-700">{item.item}</td>
                        <td className="p-4 font-bold text-orange-600">{item.quantity}</td>
                        <td className="p-4">
                          <button
                            onClick={() => removeFromInquiry(index)}
                            className="text-red-500 hover:text-red-700 font-bold hover:underline"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={sendInquiry}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full text-2xl shadow-lg transition transform hover:scale-105"
                >
                  Send Inquiry Now 🚀
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product Selection Modal */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={closeProductModal}>
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative animate-fade-in-up"
            onClick={e => e.stopPropagation()} // Prevent close on modal click
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-purple-900 text-white px-8 py-5 flex justify-between items-center z-10">
              <h3 className="text-2xl font-bold">{activeProduct.name}</h3>
              <button
                onClick={closeProductModal}
                className="text-white hover:text-gray-300 text-3xl font-bold leading-none"
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <p className="text-gray-600 mb-6 italic">Select items and enter the quantity you need.</p>

              <div className="space-y-4">
                {activeProduct.items.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition border border-purple-100">
                    <label className="font-semibold text-purple-900 text-lg mb-2 sm:mb-0 cursor-pointer flex-grow">
                      {item}
                    </label>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500">Qty:</span>
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        className="w-24 p-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-center font-bold text-gray-700"
                        value={tempQuantities[item] || ''}
                        onChange={(e) => handleQuantityChange(item, e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white p-6 border-t border-gray-100 flex justify-end gap-4">
              <button
                onClick={closeProductModal}
                className="px-6 py-3 rounded-full text-purple-700 font-bold hover:bg-purple-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={addItemsToInquiry}
                className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full font-bold shadow-lg transition transform hover:scale-105"
              >
                Add to Inquiry List
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-12 relative inline-block">
            What Our Clients Say
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-purple-400 w-40 -mb-4"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-purple-800 text-2xl font-bold">
                    SK
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-purple-900">Bhairavnath Sugar Works Barshi.</h4>
                    {/* <p className="text-gray-600">Manufacturing Unit Owner</p> */}
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "Unique Solutions has been our go-to supplier for the last 4 years. Their welding rods and fasteners are always top quality, and delivery is super fast even for urgent requirements."
                </p>
                <div className="mt-6 flex justify-center gap-1 text-orange-500">
                  ★★★★★
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-purple-800 text-2xl font-bold">
                    RP
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-purple-900">Bhairavnath Sugar Works, Unit 01, Sonari</h4>
                    {/* <p className="text-gray-600">Construction Contractor</p> */}
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "Best service in Aurangabad! Competitive prices, genuine products, and very helpful staff. They saved us during a tight project deadline."
                </p>
                <div className="mt-6 flex justify-center gap-1 text-orange-500">
                  ★★★★★
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-purple-800 text-2xl font-bold">
                    AM
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-purple-900">Bhairavnath Sugar Works, Shivajinagar</h4>
                    {/* <p className="text-gray-600">Automobile Workshop Owner</p> */}
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "Reliable supplier for bearings, tools, and safety gear. Always ready to source rare items quickly. Highly recommended for industrial needs."
                </p>
                <div className="mt-6 flex justify-center gap-1 text-orange-500">
                  ★★★★★
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-purple-800 text-2xl font-bold">
                    AM
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-purple-900">Alankar Engineering, Chikalthana MIDC</h4>
                    {/* <p className="text-gray-600">Automobile Workshop Owner</p> */}
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "Good Service Best experience"
                </p>
                <div className="mt-6 flex justify-center gap-1 text-orange-500">
                  ★★★★★
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-purple-800 text-2xl font-bold">
                    RP
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-purple-900">Pranshu Electricals</h4>
                    {/* <p className="text-gray-600">Construction Contractor</p> */}
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "Best service in Chhatrapati Sambhajinagar! Competitive prices, genuine products, and very helpful staff. They saved us during a tight project deadline."
                </p>
                <div className="mt-6 flex justify-center gap-1 text-orange-500">
                  ★★★★
                </div>
              </div>
            </div>

            {/* Optional: Add 1-2 more cards if you want 4–6 testimonials */}
          </div>

          {/* Optional: View More Button */}
          <div className="mt-12">
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg transition">
              See More Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
          // backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/014/326/271/non_2x/purple-gradient-abstract-background-with-line-and-halftone-element-for-wallpaper-landing-page-or-website-banner-vector.jpg)',
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
    </div>
  );
};

export default App;
