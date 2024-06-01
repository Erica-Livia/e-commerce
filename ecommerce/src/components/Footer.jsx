import React from "react";
import {Link, NavLink} from "react-router-dom";

function Footer() {
    return(
        <footer className="bottom-0">
        <div className="text-footerText  p-8 font-manrope bg-lightBlack px-32 py-14">

            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">audiophile</div>
                <div className="md:flex text-white space-x-4 text-sm">
                    <a href='/' className="hover:text-lightCta">HOME</a>
                    <a href='/headphones' className="hover:text-lightCta">HEADPHONES</a>
                    <a href='/speakers' className="hover:text-lightCta">SPEAKERS</a>
                    <a href='/earphones' className="hover:text-lightCta">EARPHONES</a>
                </div>
            </div>
            <div className="text-sm font-light">
                <p className="p-10 align-baseline w-3/5">
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                </p>
            </div>
            <div>
                <p className="text-sm text-center">Made By Erica-Livia, Copyright 2024. All Rights Reserved</p>
            </div>
        </div>
        </footer>
    )
}

export default Footer;