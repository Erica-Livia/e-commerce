import React from "react";
import {Link, NavLink} from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
    return(
        <footer className="bg-lightBlack text-footerText font-manrope">
        <div className="container mx-auto p-8 md:px-16 md:py-12 lg:px-32 lg:py-14">

            <div className="flex flex-col md:flex-row md:justify-between md:items-left">
                <div className="text-white text-2xl font-bold text-left md:text-left">audiophile</div>
                <div className="text-white mt-6 md:mt-0 flex justify-left md:justify-end space-x-4 text-sm">

                    <a href='/' className="hover:text-lightCta">HOME</a>
                    <a href='/headphones' className="hover:text-lightCta">HEADPHONES</a>
                    <a href='/speakers' className="hover:text-lightCta">SPEAKERS</a>
                    <a href='/earphones' className="hover:text-lightCta">EARPHONES</a>
                </div>
            </div>
            <div className="mt-6 text-sm font-light text-left md:text-left md:w-2/5 mx-auto md:mx-0">
                <p className="px-2 md:px-0">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and
                    sound specialists who are devoted to helping you get the most out of personal audio. Come and visit
                    our demo facility - we’re open 7 days a week.
                </p>
            </div>
            <div className="flex justify-end md:flex-row md:justify-between md:items-center">
                <p className="mt-8 text-left text-sm">Made By Erica-Livia, Copyright 2024. All Rights Reserved</p>
                <div style={{display: 'flex', justifyContent: 'space-around', width: '200px'}} className="text-white">
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