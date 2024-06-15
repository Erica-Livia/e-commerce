import React from "react";
import {Link, NavLink} from "react-router-dom";

function Footer() {
    return(
        <footer className="bg-lightBlack text-footerText font-manrope">
        <div className="container mx-auto p-8 md:px-16 md:py-12 lg:px-32 lg:py-14">

            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="text-white text-2xl font-bold text-center md:text-left">audiophile</div>
                <div className="mt-6 md:mt-0 flex justify-center md:justify-end space-x-4 text-sm">
                    <a href='/' className="hover:text-lightCta">HOME</a>
                    <a href='/headphones' className="hover:text-lightCta">HEADPHONES</a>
                    <a href='/speakers' className="hover:text-lightCta">SPEAKERS</a>
                    <a href='/earphones' className="hover:text-lightCta">EARPHONES</a>
                </div>
            </div>
            <div className="mt-6 text-sm font-light text-center md:text-left md:w-3/5 mx-auto md:mx-0">
                <p className="px-2 md:px-0">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                </p>
            </div>
            <div>
                <p className="mt-8 text-center text-sm">Made By Erica-Livia, Copyright 2024. All Rights Reserved</p>
            </div>
        </div>
        </footer>
    )
}

export default Footer;