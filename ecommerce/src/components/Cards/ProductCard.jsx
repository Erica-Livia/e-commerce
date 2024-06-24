import React from 'react';
import { useNavigate} from 'react-router-dom';
import '../../custom.css';

function ProductCard({ image, title, description, price, route, reverse }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route, { state: { image, title, description, price } });
    };

    return (
        <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} justify-around items-center px-28 py-8`}>
            <div className="w-1/2 mx-auto">
                <img src={image} alt={title} className="w-80 h-100 bg-darkWhite p-20"/>
            </div>
            <div className="text-cta w-1/2 mx-auto">
                <h1 className="tracking-widest">NEW PRODUCT</h1>
                <h2 className="text-black text-4xl w-3/5 py-5 font-bold">{title}</h2>
                <p className="text-sm w-4/5 py-5 font-normal text-footerText tracking-wide">{description}</p>
                <button onClick={handleClick} className="pt-3 pb-3 pr-5 pl-5 w-fit text-sm text-white bg-cta tracking-wider hover:bg-lightCta">
                    SEE PRODUCT
                </button>
            </div>

        </div>
    );
}

export default ProductCard;
