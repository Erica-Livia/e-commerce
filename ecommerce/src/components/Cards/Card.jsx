import React from "react";
import { Link } from "react-router-dom";
import '../../custom.css';
import {IoIosArrowForward} from "react-icons/io";

function Card({ image, title, description, route }) {
    return (
        <div className="bg-darkWhite mx-auto pt-20 pb-8 px-4 md:px-8 md:pt-2 rounded-md relative max-w-sm w-3/4 h-2/3">
            <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-38 h-38 md:w-40 md:h-40 justify-center imageShadow">
                <img src={image} alt={title} className="object-contain items-center w-full h-full md:w-4/5"/>
            </div>
            <div className="text-lightBlack text-center mt-4 md:mt-20 pt-6">
                <h2 className="text-xl md:text-xl font-bold tracking-wider pb-2">{title}</h2>
                <div className="inline-flex justify-center items-center gap-x-2">
                    <Link to={route} className="text-black text-sm">
                    SHOP
                </Link>
                    <IoIosArrowForward className="text-cta"/>
                </div>

            </div>
        </div>
    );
}

export default Card;
