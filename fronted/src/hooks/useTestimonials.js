import { useState, useEffect } from 'react';
import axios from 'axios';

export const useTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [visibleReviews, setVisibleReviews] = useState(3);

    const fallbackTestimonials = [
        { initials: "SK", name: "Bhairavnath Sugar Works Barshi.", role: "", text: "Unique Solutions has been our go-to supplier for the last 4 years. Their welding rods and fasteners are always top quality." },
        { initials: "RP", name: "Bhairavnath Sugar Works, Unit 01", role: "", text: "Best service in Aurangabad! Competitive prices, genuine products, and very helpful staff." },
        { initials: "AM", name: "Bhairavnath Sugar Works, Shivajinagar", role: "", text: "Reliable supplier for bearings, tools, and safety gear. Always ready to source rare items quickly." },
        { initials: "AM", name: "Alankar Engineering", role: "", text: "Good Service Best experience" },
        { initials: "RP", name: "Pranshu Electricals", role: "", text: "Best service in Chhatrapati Sambhajinagar! Competitive prices, genuine products." },
        { initials: "JD", name: "John Doe Industries", role: "", text: "Exceptional quality and timely delivery. Highly recommended for industrial supplies." },
        { initials: "AS", name: "Alpha Steel Works", role: "", text: "Great variety of products and excellent customer support." },
        { initials: "MK", name: "Modern Kitchens", role: "", text: "We source all our hardware from Unique Solutions. Never disappointed." },
        { initials: "RL", name: "Red Logic Tech", role: "", text: "Fast shipping and great packaging. Will order again." },
        { initials: "ST", name: "Star Tech Solutions", role: "", text: " professional team and high-quality industrial tools." },
        { initials: "GZ", name: "Green Zone Construction", role: "", text: "They understand our needs and provide the best solutions." }
    ];

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/testimonials');
                if (res.data && res.data.length > 0) {
                    setTestimonials(res.data);
                } else {
                    setTestimonials(fallbackTestimonials);
                }
            } catch (err) {
                console.log("Using fallback testimonials due to API error");
                setTestimonials(fallbackTestimonials);
            }
        };
        fetchTestimonials();
    }, []);

    const showMoreReviews = () => {
        if (visibleReviews + 3 >= testimonials.length) {
            setTestimonials(prev => [...prev, ...prev]);
        }
        setVisibleReviews(prev => prev + 3);
    };

    return { testimonials, visibleReviews, showMoreReviews };
};
