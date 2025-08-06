import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../custom.css';

function ProductCard({ image, title, description, price, route, reverse }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route, { state: { image, title, description, price } });
    };

    return (
        <div className={`flex flex-col md:flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-around items-center px-4 lg:px-28 py-8 gap-y-8 md:gap-x-24`}>
            <div className="w-full lg:w-4/5 mx-auto bg-darkWhite">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto max-w-xs md:max-w-xs lg:max-w-full  p-4 lg:p-20 rounded-md mx-auto"
                />
            </div>
            <div className="text-cta w-full mx-auto text-center md:text-center lg:text-left">
                <h1 className="tracking-widest">NEW PRODUCT</h1>
                <h2 className="text-black  md:text-center lg:text-left text-2xl md:text-3xl lg:text-4xl w-full lg:w-3/5 py-5 font-bold">{title}</h2>
                <p className="text-sm w-full lg:w-4/5 py-5 font-normal text-footerText tracking-wide">{description}</p>
                <button
                    onClick={handleClick}
                    className="pt-3 pb-3 pr-5 pl-5 w-fit text-sm text-white bg-cta tracking-wider hover:bg-lightCta mx-auto md:mx-0"
                >
                    SEE PRODUCT
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
