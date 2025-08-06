import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantities + quantity }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };

    const incrementQuantity = (productId) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantities: item.quantities + 1 } : item
            )
        );
    };

    const decrementQuantity = (productId) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId && item.quantities > 1 ? { ...item, quantities: item.quantities - 1 } : item
            )
        );
    };

    const removeAllFromCart = () => {
        setCart([]);
    };

    const total = cart.reduce((acc, item) => acc + item.price * item.quantities, 0);

    const cartCount = cart.reduce((acc, item) => acc + item.quantities, 0);
    const value = {
        cart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeAllFromCart,
        total,
        cartCount,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};