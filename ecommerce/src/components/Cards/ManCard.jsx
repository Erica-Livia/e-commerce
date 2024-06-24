import React from "react";
import man from "../../assets/man.png";

function ManCard() {
    return (
        <>
            {/*  DescriptionSection with ManPictures   */}
            <div className="px-4 md:px-10 lg:px-40 py-10 flex justify-between items-center rounded-md">
                {/* Description */}
                <div className="w-1/2 center my-auto">
                    <h2 className="w-4/5 text-black text-2xl md:text-5xl py-3 md:py-5 font-semibold">BRINGING YOU THE BEST AUDIO HEAR</h2>
                    <p className="text-sm sm:text-sm md:text-base lg:text-sm sm:w-3/5 md:w-4/5 md:m-0 m-auto py-2 pb-5 font-normal text-footerText tracking-wider leading-6">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <div>
                    <img src={man} className="w-full border-2 rounded-5xl'/>"/>
                </div>
            </div>
        </>
    )
}

export default ManCard;