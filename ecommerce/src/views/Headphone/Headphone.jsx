import React from "react";
import {useParams} from "react-router-dom";
import markII from "../../assets/headphones/headphones4.png"
import xx99 from "../../assets/headphones/headphones1.png"
import xx59 from "../../assets/headphones/headphones2.png"
import GroupCard from "../../components/Cards/GroupCard.jsx";
import ManCard from "../../components/Cards/ManCard.jsx";
import ProductCard from "../../components/Cards/ProductCard.jsx";
import products from "../../data/products.json";

const {headphones} = products;
const imageMap = {
    "headphones4.png": markII,
    "headphones1.png": xx99,
    "headphones2.png": xx59
}

function Headphone() {
    const { id } = useParams();
    const headphone = headphones.find(headphone => headphone.id === id);

    return(
        <>
            <div className="items-center">
                {/* Headphone HeroSection */}
                <div className="bg-lightBlack flex justify-around text-white text-4xl h-2/3 w-full py-20">
                    <h1>HEADPHONES</h1>
                </div>

                {/* HeadphoneList Display */}
                {/* Item Product Card*/}

                {/* Item1 */}
                <div className="px-4 md:px-10 lg:px-40 py-10 mx-auto">
                    {headphones.map(headphone =>(
                        <ProductCard
                            image = {imageMap[headphone.image]}
                            title ={headphone.title}
                            description={headphone.description}
                            id={headphone.id}
                            route={headphone.route}
                            reverse={headphone.id % 2 === 0}
                        />
                        )
                    )}

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

export default Headphone;