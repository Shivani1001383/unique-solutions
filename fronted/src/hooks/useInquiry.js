import { useState } from 'react';

export const useInquiry = () => {
    // Structure: [{ category: "Welding Rods", item: "MIG Wires", quantity: 5 }]
    const [inquiryItems, setInquiryItems] = useState([]);

    const addItemsToInquiry = (activeProduct, selectedCompany, tempQuantities, closeProductModal) => {
        if (!activeProduct) return;

        // Validation for All Products
        if (!selectedCompany) {
            alert("Please select a company first.");
            return;
        }

        const newItems = [];
        Object.entries(tempQuantities).forEach(([item, quantity]) => {
            if (quantity > 0) {
                const finalItemName = selectedCompany ? `${item} (${selectedCompany})` : item;
                newItems.push({
                    category: activeProduct.name,
                    item: finalItemName,
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

    const removeFromInquiry = (indexToRemove) => {
        setInquiryItems(inquiryItems.filter((_, index) => index !== indexToRemove));
    };

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
    };

    return { inquiryItems, addItemsToInquiry, removeFromInquiry, sendInquiry };
};
