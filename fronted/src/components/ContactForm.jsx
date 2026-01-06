import React from 'react';

const ContactForm = () => {
    return (
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
    );
};

export default ContactForm;
