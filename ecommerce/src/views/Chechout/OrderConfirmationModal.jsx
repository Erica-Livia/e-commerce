import React, { useState } from 'react';
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCart } from "../../components/Cart/CartContext.jsx";

const OrderConfirmationModal = ({ isOpen, onClose }) => {
    const [showAllItems, setShowAllItems] = useState(false);
    const { cart, total } = useCart();

    if (!isOpen) return null;

    const displayedItems = showAllItems ? cart : cart.slice(0, 1);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 text-center">
                <div className="p-5 mx-5 bg-cta w-fit rounded-full ">
                    <MdDone className="text-white size-5"/>
                </div>

                <h2 className="text-2xl text-start mx-5 mt-4 font-bold mb-4">THANK YOU FOR YOUR ORDER</h2>
                <p className="text-sm text-start mx-5 text-footerText mb-6">You will receive an email confirmation shortly</p>

                <div className="flex justify-between gap-x-0 items-stretch py-4 pr-8 pl-4 h-max mt-6">
                    <div className="flex flex-col gap-y-4 py-6 pr-6 pl-2 bg-darkWhite rounded-l-lg">
                        {displayedItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-x-4">
                                <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg"/>
                                <div className="flex flex-col text-start">
                                    <span className="text-xs font-bold">{item.title}</span>
                                    <span className="text-sm text-footerText">x{item.quantities}</span>
                                    <span className="text-sm text-footerText">${(item.price * item.quantities)}</span>
                                </div>
                            </div>
                        ))}
                        {cart.length > 1 && (
                            <button
                                className="text-footerText underline text-sm mt-2"
                                onClick={() => setShowAllItems(!showAllItems)}
                            >
                                {showAllItems ? "View less items" : `View all items (${cart.length})`}
                            </button>
                        )}
                    </div>
                    <div
                        className="relative flex-1 flex flex-col bg-lightBlack text-start border-l rounded-r-lg pl-4 pr-6 py-8">
                        <span className="text-sm tracking-wide text-footerText font-normal pb-2">GRAND TOTAL</span>
                        <span className="text-md text-white">${total.toFixed(2)}</span>
                    </div>
                </div>

                <Link to="/">
                    <button
                    onClick={onClose}
                    className="w-full mt-6 bg-cta text-white py-2 px-4 tracking-wide hover:bg-lightCta"
                >
                   BACK TO HOME
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default OrderConfirmationModal;
