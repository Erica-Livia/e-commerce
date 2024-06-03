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
        <nav className="text-white pt-3 pb-3 px-8 font-manrope bg-lightBlack w-full md:px-20 sm:px-8">
            <div className="container mx-auto flex justify-between items-center">
                <button
                    className="md:hidden text-white left-0"
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
                <div className="text-2xl font-bold md:text-center"><Link to='/'>audiophile</Link></div>
                <div className={`hidden md:flex space-x-4 text-sm ${isOpen ? 'hidden' : 'block'}`}>
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-lightCta" : "text-white hover:text-lightCta"}>HOME</NavLink>
                    <NavLink to="/headphones" className={({ isActive }) => isActive ? "text-lightCta" : "text-white hover:text-lightCta"}>HEADPHONES</NavLink>
                    <NavLink to="/speakers" className={({ isActive }) => isActive ? "text-lightCta" : "text-white hover:text-lightCta"}>SPEAKERS</NavLink>
                    <NavLink to="/earphones" className={({ isActive }) => isActive ? "text-lightCta" : "text-white hover:text-lightCta"}>EARPHONES</NavLink>
                </div>
                <div className={` md:flex text-sm ${isOpen ? 'hidden' : 'block'}`}>
                    <a href="/" className="text-xl hover:text-lightCta"><IoCartOutline/></a>
                </div>


            </div>
            {isOpen && (
                <div className="md:hidden block justify-around text-center">
                    <NavLink to="/" className={({ isActive }) => isActive ? "block px-2 py-1 text-lightCta" : "block px-2 py-1 text-white hover:text-lightCta"}>HOME</NavLink>
                    <NavLink to="/headphones" className={({ isActive }) => isActive ? "block px-2 py-1 text-lightCta" : "block px-2 py-1 text-white hover:text-lightCta"}>HEADPHONES</NavLink>
                    <NavLink to="/speakers" className={({ isActive }) => isActive ? "block px-2 py-1 text-lightCta" : "block px-2 py-1 text-white hover:text-lightCta"}>SPEAKERS</NavLink>
                    <NavLink to="/earphones" className={({ isActive }) => isActive ? "block px-2 py-1 text-lightCta" : "block px-2 py-1 text-white hover:text-lightCta"}>EARPHONES</NavLink>
                    <NavLink to="/cart" className={({ isActive }) => isActive ? "block px-2 py-1 text-lightCta" : "block px-2 py-1 text-white hover:text-lightCta"}>CART</NavLink>
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
