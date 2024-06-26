import React from 'react';
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";


const OrderConfirmationModal = ({ isOpen, onClose, total }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 text-center">
                <div className="p-5 bg-cta w-fit rounded-full ">
                    <MdDone className="text-white size-6 font-bold"/>
                </div>

                <h2 className="text-2xl text-start mt-4 font-bold mb-4">Thank You For Your Order!</h2>
                <p className="text-lg text-start mb-6">Your order has been placed successfully.</p>
                <div className="flex justify-between items-center py-2 border-t">
                    <span className="text-lg font-bold">Grand Total</span>
                    <span className="text-lg">${total.toFixed(2)}</span>
                </div>
                <button
                    onClick={onClose}
                    className="mt-6 bg-cta text-white py-2 px-4 rounded hover:bg-lightCta"
                >
                   <Link to="/">Back to Home </Link>
                </button>
            </div>
        </div>
    );
};

export default OrderConfirmationModal;
