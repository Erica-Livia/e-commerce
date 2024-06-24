import React from "react";
import ProductCard from "../Cards/ProductCard.jsx";
import GroupCard from "../Cards/GroupCard.jsx";
import ManCard from "../Cards/ManCard.jsx";
import zx9 from "../../assets/speakers/speakers1.png";
import zx7 from "../../assets/speakers/speakers2.png";
import products from "../../data/products.json";
import {useParams} from "react-router-dom";

const {speakers} = products;

const imageMap = {
    "speakers1.png": zx9,
    "speakers2.png": zx7,
};

function Speaker() {
    const { id } = useParams();
    const speaker = speakers.find(speaker => speaker.id === id);
    return(
        <>
            <div className="items-center">
                {/* Speaker HeroSection */}
                <div className="bg-lightBlack flex justify-center text-white text-4xl h-2/3 w-full py-20">
                    <h1>SPEAKERS</h1>
                </div>

                {/* Speakers List Display */}
                {/* Item Product Card*/}

                <div className="px-4 md:px-10 lg:px-40 py-10 mx-auto">
                    {speakers.map(speaker => (
                            <ProductCard
                                image={imageMap[speaker.image]}
                                title={speaker.title}
                                description={speaker.description}
                                id={speaker.id}
                                route={speaker.route}
                                reverse={speaker.id % 2 === 0}
                            />
                        )
                    )}

                </div>

                <>
                    <GroupCard/>
                </>

                <>
                    <ManCard/>
                </>

            </div>
        </>
    )
}

export default Speaker;