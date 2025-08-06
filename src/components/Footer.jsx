import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-lightBlack text-footerText font-manrope">
            <div className="container mx-auto p-8 md:px-16 md:py-12 lg:px-32 lg:py-14">
                <div className="flex flex-col lg:flex-row justify-between items-center md:items-start">
                    <div className="text-white text-2xl font-bold mb-5 lg:mb-0">
                        audiophile
                    </div>
                    <div className="text-darkWhite text-center gap-y-4 flex flex-col md:flex-row xl:flex-row justify-between  md:space-x-8 lg:space-x-8 text-sm">

                        <a href='/' className="hover:text-lightCta">HOME</a>
                        <a href='/headphones' className="hover:text-lightCta">HEADPHONES</a>
                        <a href='/speakers' className="hover:text-lightCta">SPEAKERS</a>
                        <a href='/earphones' className="hover:text-lightCta">EARPHONES</a>
                    </div>
                </div>
                <div className="mt-6 text-sm font-light text-center md:text-left lg:w-3/5 mx-auto lg:mx-0">
                    <p className="px-2 md:px-0">
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                        and
                        sound specialists who are devoted to helping you get the most out of personal audio. Come and
                        visit
                        our demo facility - we’re open 7 days a week.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-8">
                    <div className="mb-4 lg:mb-0 text-center md:text-left">
                        <p className="text-sm">Made By Erica-Livia, Copyright 2024. All Rights Reserved</p>
                    </div>
                    <div className="flex justify-center lg:justify-end space-x-4 text-white">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={20}/>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={20}/>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={20}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;