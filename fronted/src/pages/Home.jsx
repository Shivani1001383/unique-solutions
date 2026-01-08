import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import CompanyTicker from '../components/CompanyTicker';
import ContactBar from '../components/ContactBar';
import AboutUs from '../components/AboutUs';
import ProductSection from '../components/ProductSection';
import ProductModal from '../components/ProductModal';
import WhyChooseUs from '../components/WhyChooseUs';
import MLACategories from '../components/MLACategories';
import AuthorisedDealers from '../components/AuthorisedDealers';
import Footer from '../components/Footer';

// Hooks
import { useProductModal } from '../hooks/useProductModal';
import { useInquiry } from '../hooks/useInquiry';

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


    return (
        <div className="min-h-screen font-sans" id="home">
            <Navbar />
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

            <WhyChooseUs />
            <MLACategories />
            <AuthorisedDealers />
            <Footer />
        </div>
    );
};

export default Home;
