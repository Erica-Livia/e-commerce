import React from 'react';
import products from "../../data/products.json";
import markII from "../../assets/headphones/headphones4.png";
import xx99 from "../../assets/headphones/headphones1.png";
import xx59 from "../../assets/headphones/headphones2.png";
import zx9 from "../../assets/speakers/speakers1.png";
import zx7 from "../../assets/speakers/speakers2.png";
import yx1 from "../../assets/earphones/earphones.png";
import small11 from "../../assets/combination/small11.png";
import small12 from "../../assets/combination/small12.png";
import small21 from "../../assets/combination/small21.png";
import small22 from "../../assets/combination/small22.png";
import small31 from "../../assets/combination/small31.png";
import small32 from "../../assets/combination/small32.png";
import big1 from "../../assets/combination/big1.png";
import big2 from "../../assets/combination/big2.png";
import big3 from "../../assets/combination/big3.png";


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

const ProductLike = () => {
    const allProducts = [...products.headphones, ...products.speakers, ...products.earphones];
    const randomProducts = allProducts.slice(2, 5 );

    return (
        <div className="py-16 px-8 lg:px-40">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">YOU MAY ALSO LIKE</h3>
            <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-y-8 md:gap-y-0 md:gap-x-8">
                {randomProducts.map(product => (
                    <div key={product.id} className="text-center">
                        <div className="bg-darkWhite p-5 rounded">
                            <img src={imageMap[product.image]} alt={product.title}
                                 className="w-1/2  lg:w-1/2 h-auto max-w-xs mx-auto rounded-md"/>
                        </div>
                        <h4 className="text-l md:text-xl font-semibold mt-5">{product.title}</h4>
                        <button
                            onClick={() => window.location.href = product.route}
                            className="mt-5 py-2 px-6 bg-cta text-white hover:bg-lightCta"
                        >
                            SEE PRODUCT
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductLike;
