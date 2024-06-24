import React from 'react';
import { useCart } from '../Cart/CartContext.jsx';
import { Link } from 'react-router-dom'

const CartModal = ({ isOpen, onClose }) => {
    const { cart, incrementQuantity, decrementQuantity, removeAllFromCart, total } = useCart();

    if (!isOpen) return null;

    return (
        <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 flex justify-end">
            <div className="bg-white w-1/5 h-fit p-4 mt-20 mr-20 overflow-auto border rounded-xl">
                <div className="flex justify-between items-center">

                        <h2 className="text-xl font-bold">Cart</h2>

                    <div className="flex items-center">
                        <button onClick={removeAllFromCart} className="text-footerText text-sm mr-4">Remove All</button>
                        <button onClick={onClose} className="text-black text-lg">&times;</button>
                    </div>
                </div>
                <ul className="mt-4">
                    {cart.map(item => (
                        <li key={item.id} className="flex justify-between items-center py-2 border-b">
                            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                            <div className="flex-1 ml-4">
                                <h3 className="font-bold">{item.title}</h3>
                                <p>${item.price}</p>
                                <div className="flex items-center">
                                    <button onClick={() => decrementQuantity(item.id)} className="px-2">-</button>
                                    <span className="px-4">{item.quantity}</span>
                                    <button onClick={() => incrementQuantity(item.id)} className="px-2">+</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-4">
                    <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
                    <Link to="/checkout">
                        <button className="w-full bg-cta text-white py-2 mt-2">CHECKOUT</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
