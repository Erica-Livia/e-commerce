import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GroupCard from '../../components/Cards/GroupCard.jsx';
import ManCard from '../../components/Cards/ManCard.jsx';
import ImageCombination from "./ImageCombination.jsx";
import { useCart } from "../../components/Cart/CartContext.jsx";
import products from "../../data/products.json";
import markII from "../../assets/headphones/headphones4.png";
import xx99 from "../../assets/headphones/headphones1.png";
import xx59 from "../../assets/headphones/headphones2.png";
import zx9 from "../../assets/speakers/speakers1.png";
import zx7 from "../../assets/speakers/speakers2.png";
import yx1 from "../../assets/earphones/earphones.png";
import big1 from "../../assets/combination/big1.png";
import big2 from "../../assets/combination/big2.png";
import big3 from "../../assets/combination/big3.png";
import small11 from "../../assets/combination/small11.png";
import small12 from "../../assets/combination/small12.png";
import small21 from "../../assets/combination/small21.png";
import small22 from "../../assets/combination/small22.png";
import small31 from "../../assets/combination/small31.png";
import small32 from "../../assets/combination/small32.png";
import ProductLike from "../../components/Cards/ProductLike.jsx";

const { headphones, speakers, earphones } = products;

const imageMap = {
    "headphones4.png": markII,
    "headphones1.png": xx99,
    "headphones2.png": xx59,
    "speakers1.png": zx9,
    "speakers2.png": zx7,
    "earphones.png": yx1,
    "small11.png": small11,
    "small12.png": small12,
    "small21.png": small21,
    "small22.png": small22,
    "small31.png": small31,
    "small32.png": small32,
    "big1.png": big1,
    "big2.png": big2,
    "big3.png": big3,
};

const randomImagesCombination = [
    ["small11.png", "small12.png", "big1.png"],
    ["small21.png", "small22.png", "big2.png"],
    ["small31.png", "small32.png", "big3.png"],
];

function getRandomCombination() {
    const randomIndex = Math.floor(Math.random() * randomImagesCombination.length);
    return randomImagesCombination[randomIndex];
}

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const product = [...headphones, ...speakers, ...earphones].find(product => product.id === id);

    if (!product) {
        return <div>Product not found</div>;
    }

    const productType = headphones.some(headphone => headphone.id === id)
        ? 'Headphone'
        : speakers.some(speaker => speaker.id === id)
            ? 'Speaker'
            : 'Earphone';

    const imagesForCombination = getRandomCombination().map(image => imageMap[image]);

    // Function to handle incrementing quantity
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Function to handle decrementing quantity
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    // Function to handle adding to cart
    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: imageMap[product.image],
            quantities: quantity,
        });
        alert(`Added ${quantity} of ${product.title} to cart.`);
    };

    return (
        <>
            <div className="px-4 md:px-10 lg:px-40 py-10 mx-auto">
                <div className="flex justify-start items-center py-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-black text-sm py-2 border-none hover:bg-gray-200"
                    >
                        Go Back
                    </button>
                </div>

                <div>
                    <div className="flex flex-col md:flex-row justify-around items-center py-8">
                        <div className="w-full md:w-1/2 mx-auto">
                            <img src={imageMap[product.image]} alt={product.title}
                                 className="w-full md:w-80 h-auto bg-darkWhite p-20 mx-auto" />
                        </div>
                        <div className="text-cta w-full md:w-1/2 mx-auto mt-8 md:mt-0">
                            <h1 className="tracking-widest text-left md:text-left">NEW PRODUCT</h1>
                            <h2 className="text-black text-3xl md:text-5xl w-full md:w-3/5 py-3 font-bold text-left">{productType}: {product.title}</h2>
                            <p className="text-footerText text-sm w-full md:w-3/5 py-5 font-normal text-left">{product.description}</p>
                            <p className="text-black text-2xl w-full md:w-3/5 py-5 font-bold text-left">${product.price}</p>

                            {/* Add to CartContext Section */}
                            <div className="flex items-center justify-start py-8">
                                <div className="text-lightBlack bg-darkWhite flex items-center p-2">
                                    <button onClick={handleDecrement} className="px-3 py-1 text-lg">-</button>
                                    <span className="px-4 text-lg">{quantity}</span>
                                    <button onClick={handleIncrement} className="px-3 py-1.5 text-lg">+</button>
                                </div>

                                <button
                                    onClick={handleAddToCart}
                                    className="ml-4 px-6 py-4 text-white bg-cta hover:bg-lightCta"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-around w-full mt-8">
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-xl md:text-3xl py-4">FEATURES</h2>
                        <p className="text-footerText">{product.longDescription}</p>
                    </div>

                    <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
                        <h2 className="text-xl md:text-3xl py-4">IN THE BOX</h2>
                        <ul className="text-footerText">
                            {product.inBox.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Images section */}
                <div className="w-full mt-8">
                    <ImageCombination images={imagesForCombination} />
                </div>

                <div>
                    {/* 3 cards */}
                </div>

                <ProductLike />
                <GroupCard />
                <ManCard />
            </div>
        </>
    );
}

export default ProductDetails;
