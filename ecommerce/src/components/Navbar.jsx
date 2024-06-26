import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import Headphone from '../views/Headphone/Headphone.jsx';
import Speaker from '../views/Speaker/Speaker.jsx';
import Earphone from '../views/Eearphone/Earphone.jsx';
import { CartProvider, useCart } from '../components/Cart/CartContext.jsx';
import ScrollToTop from "./ScrollToTop.jsx";
import HomePage from '../views/HomePage/HomePage.jsx';
import '../custom.css';
import ProductDetails from '../views/ProductDetails/ProductDetails.jsx';
import CartModal from '../components/Cart/CartModal.jsx';
import CheckoutPage from '../views/Chechout/CheckoutPage.jsx';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const menuRef = useRef(null);
    const { cartCount } = useCart(); // Ensure you are correctly destructuring cartCount from useCart

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <Router>
            <ScrollToTop />
            <nav className="text-white pt-3 px-8 font-manrope bg-darkBgColor w-full lg:px-40 md:px-20 sm:px-8">
                <div className="container mx-auto flex justify-between items-center border-b-gray-500 border-b-2 sm:pb-4 ">
                    <button
                        className="lg:hidden md:block text-white p-2 rounded focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <>
                                    <path d="M3 6h18" />
                                    <path d="M3 12h18" />
                                    <path d="M3 18h18" />
                                </>
                            )}
                        </svg>
                    </button>

                    <div className="text-2xl font-bold md:text-center">
                        <Link to="/" onClick={closeMenu}>
                            audiophile
                        </Link>
                    </div>
                    <div
                        className={`lg:block md:hidden hidden space-x-4 gap-x-6 py-6 text-sm navLinks tracking-widest ${
                            isOpen ? 'block' : 'hidden'
                        }`}
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-lightCta' : 'text-white hover:text-lightCta'
                            }
                            onClick={closeMenu}
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            to="/headphones"
                            className={({ isActive }) =>
                                isActive ? 'text-lightCta' : 'text-white hover:text-lightCta'
                            }
                            onClick={closeMenu}
                        >
                            HEADPHONES
                        </NavLink>
                        <NavLink
                            to="/speakers"
                            className={({ isActive }) =>
                                isActive ? 'text-lightCta ' : 'text-white hover:text-lightCta'
                            }
                            onClick={closeMenu}
                        >
                            SPEAKERS
                        </NavLink>
                        <NavLink
                            to="/earphones"
                            className={({ isActive }) =>
                                isActive ? 'text-lightCta' : 'text-white hover:text-lightCta'
                            }
                            onClick={closeMenu}
                        >
                            EARPHONES
                        </NavLink>
                    </div>
                    <div className="block relative">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="text-2xl hover:text-lightCta relative flex top-1.5"
                        >
                            <IoCartOutline />
                            {cartCount > 0 && (
                                <div className="block">
                                    <span className="bg-cta text-white rounded-full px-1 cardCount">
                                    {cartCount}
                                </span>
                                </div>

                            )}
                        </button>
                    </div>
                </div>
                <div ref={menuRef} className={`${isOpen ? 'block' : 'hidden'} lg:hidden block justify-around text-center`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'block px-2 py-1 text-lightCta' : 'block px-2 py-1 text-white hover:text-lightCta'
                        }
                        onClick={closeMenu}
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to="/headphones"
                        className={({ isActive }) =>
                            isActive ? 'block px-2 py-1 text-lightCta' : 'block px-2 py-1 text-white hover:text-lightCta'
                        }
                        onClick={closeMenu}
                    >
                        HEADPHONES
                    </NavLink>
                    <NavLink
                        to="/speakers"
                        className={({ isActive }) =>
                            isActive ? 'block px-2 py-1 text-lightCta' : 'block px-2 py-1 text-white hover:text-lightCta'
                        }
                        onClick={closeMenu}
                    >
                        SPEAKERS
                    </NavLink>
                    <NavLink
                        to="/earphones"
                        className={({ isActive }) =>
                            isActive ? 'block px-2 py-1 text-lightCta' : 'block px-2 py-1 text-white hover:text-lightCta'
                        }
                        onClick={closeMenu}
                    >
                        EARPHONES
                    </NavLink>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/headphones" element={<Headphone />} />
                <Route path="/earphones" element={<Earphone />} />
                <Route path="/speakers" element={<Speaker />} />
                <Route path="/product-detail/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<CartModal />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </Router>
    );
}

export default Navbar;
