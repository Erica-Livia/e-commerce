import React from 'react';
import { useCart } from '../../components/Cart/CartContext.jsx';
import { Link } from 'react-router-dom';

const CartModal = ({ isOpen, onClose }) => {
    const { cart, incrementQuantity, decrementQuantity, removeAllFromCart, total } = useCart();

    if (!isOpen) return null;

    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert('Cart is empty. Add items to proceed.');
        } else {
            onClose();
        }
    };

    return (
        <div
            className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 flex justify-center sm:justify-center md:justify-end"
            onClick={handleClickOutside}
        >
            <div className="bg-white w-full md:w-2/5 h-fit p-4 mt-28 mx-5 sm:mt-38 sm:mr-0 md:mr-16 md:mt-24 overflow-auto border rounded-xl md:rounded-lg lg:w-1/4 xl:w-1/5 lg:mt-20 lg:mr-20 xl:mr-20">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Cart</h2>
                    <div className="flex items-center">
                        <button onClick={removeAllFromCart} className="text-footerText text-sm mr-4">Remove All</button>
                    </div>
                </div>
                <ul className="mt-4">
                    {cart.map(item => (
                        <li key={item.id} className="flex justify-between items-center py-2 border-b">
                            <div className="bg-darkWhite p-6 rounded">
                                <img src={item.image} alt={item.title} className="w-8 h-8 object-cover"/>
                            </div>
                            <div className="flex-1 ml-4">
                                <h3 className="font-bold">{item.title}</h3>
                                <div className="flex justify-between">
                                    <p className="text-footerText py-2">${item.price}</p>
                                    <div className="flex items-center bg-darkWhite py-2">
                                        <button onClick={() => decrementQuantity(item.id)} className="px-2 text-footerText">-</button>
                                        <span className="px-4">{item.quantities}</span>
                                        <button onClick={() => incrementQuantity(item.id)} className="px-2 text-footerText">+</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 py-4">
                    <div className="flex justify-between py-4">
                        <h3 className="text-xl text-footerText font-normal">TOTAL</h3>
                        <h3 className="text-xl text-footerText font-normal">${total.toFixed(2)}</h3>
                    </div>
                    <Link to="/checkout" onClick={handleCheckout} className="w-full bg-cta text-white py-2 mt-2"><button className="w-full bg-cta text-white py-2 mt-2" onClick={handleCheckout}>CHECKOUT</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
