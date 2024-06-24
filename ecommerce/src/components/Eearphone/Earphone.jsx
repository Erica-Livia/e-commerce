import React from "react";
import ProductCard from "../Cards/ProductCard.jsx";
import yx1 from "../../assets/earphones/earphones.png";
import GroupCard from "../Cards/GroupCard.jsx";
import ManCard from "../Cards/ManCard.jsx";
import products from "../../data/products.json"
import {useParams} from "react-router-dom";

const {earphones} = products;
const imageMap = {
    "earphones.png": yx1
}

function Earphone() {
    const { id} = useParams()
    const earphone = earphones.find(earphone => earphone.id === id);
    return(
        <>
            <div className="tems-center">
                {/* earphone HeroSection */}
                <div className="bg-lightBlack flex justify-center text-white text-4xl h-2/3 w-full py-20">
                    <h1>EARPHONES</h1>
                </div>

                {/* Speakers List Display */}
                {/* Item Product Card*/}

                {/* Item1 */}
                <div className="px-4 md:px-10 lg:px-40 py-10 mx-auto">
                    {earphones.map(earphone => (
                            <ProductCard
                                image = {imageMap[earphone.image]}
                                title = {earphone.title}
                                description={earphone.description}
                                route={earphone.route}
                                reverse={earphone.id % 2 === 0}
                            />
                        ))}
                </div>

                <>
                    <GroupCard />
                </>

                <>
                    <ManCard />
                </>
            </div>
        </>
    )
}

export default Earphone;