import React from 'react';

const ContactForm = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        email: '',
        product: '',
        message: ''
    });
    const [status, setStatus] = React.useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/inquiries`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Message Sent Successfully!');
                setFormData({ name: '', phone: '', email: '', product: '', message: '' });
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            console.error('Error sending inquiry:', error);
            setStatus('Error sending message. Ensure backend is running.');
        }
    };

    return (
        <section
            className="py-16 px-4 text-white"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4 drop-shadow-lg">Get in Touch</h2>
                <p className="text-xl mb-12">Send us your requirement — we will reply quickly!</p>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl"
                >
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="px-6 py-4 rounded-lg text-black text-lg border border-purple-300" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="px-6 py-4 rounded-lg text-black text-lg border border-purple-300" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email (optional)" className="px-6 py-4 rounded-lg text-black text-lg border border-purple-300" />
                    <input type="text" name="product" value={formData.product} onChange={handleChange} placeholder="Product Requirement" className="px-6 py-4 rounded-lg text-black text-lg border border-purple-300" />
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="5" className="md:col-span-2 px-6 py-4 rounded-lg text-black text-lg border border-purple-300"></textarea>

                    {status && <p className="md:col-span-2 text-center font-bold text-purple-700">{status}</p>}

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
