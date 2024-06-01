import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Headphone from "./Headphone/Headphone.jsx";
import Speaker from "./Speaker/Speaker.jsx";
import Earphone from "./Eearphone/Earphone.jsx";
import Cart from "./Cart/Cart.jsx";
import HomePage from "./HomePage/HomePage.jsx";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router>
        <nav className="text-white pt-3 pb-3 font-manrope bg-lightBlack">
            <div className="container mx-auto flex justify-between items-center px-28">
                <div className="text-2xl font-bold"> <Link to ='/'>audiophile</Link></div>
                <div className={`hidden md:flex space-x-4 text-sm ${isOpen ? 'hidden' : 'block'}`}>
                    <a className="text-white hover:text-lightCta"><NavLink to="/">HOME</NavLink></a>
                    <a  className="text-white hover:text-lightCta"><NavLink to="/headphones">HEADPHONES</NavLink></a>
                    <a className="text-white hover:text-lightCta"><NavLink to="/speakers">SPEAKERS</NavLink></a>
                    <a className="text-white hover:text-lightCta"><NavLink to="/earphones">EARPHONES</NavLink></a>
                </div>
                <div className={`hidden md:flex text-sm ${isOpen ? 'hidden' : 'block'}`}>
                    <a href="/" className="text-xl hover:text-lightCta"><IoCartOutline /></a>
                </div>

                <button
                className="md:hidden text-white"
                onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        stroke="white"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={25}
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        />
                    </svg>

                </button>
            </div>
            {isOpen && (
                <div className="md:hidden block justify-around text-center">

                    <a className="block px-2 py-1 text-white hover:text-lightCta"><NavLink to="/">HOME</NavLink></a>
                    <a className="block px-2 py-1 text-white hover:text-lightCta"><NavLink
                        to="/headphones">HEADPHONES</NavLink></a>
                    <a className="block px-2 py-1 text-white hover:text-lightCta"><NavLink
                        to="/speakers">SPEAKERS</NavLink></a>
                    <a className="block px-2 py-1 text-white hover:text-lightCta"><NavLink
                        to="/earphones">EARPHONES</NavLink></a>
                    <a className="block px-2 py-1 text-center text-white hover:text-lightCta"><NavLink to="/cart"> CART</NavLink></a>
                </div>
            )}
        </nav>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/headphones" element={<Headphone />}></Route>
                <Route path="/earphones" element={<Earphone />}></Route>
                <Route path="/speakers" element={<Speaker />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </Router>
    );
}

export default Navbar;
