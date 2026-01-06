import React from 'react';
import Header from '../components/Header';
import ContactBar from '../components/ContactBar';
import AboutUs from '../components/AboutUs';
import ProductSection from '../components/ProductSection';
import ProductModal from '../components/ProductModal';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import MLACategories from '../components/MLACategories';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

// Hooks
import { useInquiry } from '../hooks/useInquiry';
import { useProductModal } from '../hooks/useProductModal';
import { useTestimonials } from '../hooks/useTestimonials';

const Home = () => {
    const { inquiryItems, addItemsToInquiry, removeFromInquiry, sendInquiry } = useInquiry();
    const {
        activeProduct,
        selectedCompany,
        tempQuantities,
        setSelectedCompany,
        openProductModal,
        closeProductModal,
        handleQuantityChange
    } = useProductModal();
    const { testimonials, visibleReviews, showMoreReviews } = useTestimonials();

    return (
        <div className="min-h-screen font-sans">
            <Header />
            <ContactBar />
            <AboutUs />

            <ProductSection
                openProductModal={openProductModal}
                inquiryItems={inquiryItems}
                removeFromInquiry={removeFromInquiry}
                sendInquiry={sendInquiry}
            />

            <ProductModal
                activeProduct={activeProduct}
                closeProductModal={closeProductModal}
                selectedCompany={selectedCompany}
                setSelectedCompany={setSelectedCompany}
                tempQuantities={tempQuantities}
                handleQuantityChange={handleQuantityChange}
                addItemsToInquiry={addItemsToInquiry}
            />

            <Testimonials
                testimonials={testimonials}
                visibleReviews={visibleReviews}
                showMoreReviews={showMoreReviews}
            />

            <WhyChooseUs />
            <MLACategories />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;
