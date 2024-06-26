import React from 'react';

const OrderConfirmationModal = ({ isOpen, onClose, total }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 text-center">
                <h2 className="text-2xl font-bold mb-4">Thank You For Your Order!</h2>
                <p className="text-lg mb-6">Your order has been placed successfully.</p>
                <div className="flex justify-between items-center py-2 border-t">
                    <span className="text-lg font-bold">Grand Total</span>
                    <span className="text-lg">${total.toFixed(2)}</span>
                </div>
                <button
                    onClick={onClose}
                    className="mt-6 bg-cta text-white py-2 px-4 rounded hover:bg-lightCta"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default OrderConfirmationModal;
