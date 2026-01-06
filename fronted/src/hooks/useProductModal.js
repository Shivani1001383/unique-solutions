import { useState } from 'react';

export const useProductModal = () => {
    const [activeProduct, setActiveProduct] = useState(null);
    const [selectedCompany, setSelectedCompany] = useState('');
    const [tempQuantities, setTempQuantities] = useState({});

    const openProductModal = (product) => {
        setActiveProduct(product);
        setTempQuantities({});
        setSelectedCompany('');
    };

    const closeProductModal = () => {
        setActiveProduct(null);
        setTempQuantities({});
        setSelectedCompany('');
    };

    const handleQuantityChange = (item, value) => {
        if (value < 0) return;
        setTempQuantities(prev => ({
            ...prev,
            [item]: value
        }));
    };

    return {
        activeProduct,
        selectedCompany,
        tempQuantities,
        setSelectedCompany,
        openProductModal,
        closeProductModal,
        handleQuantityChange
    };
};
