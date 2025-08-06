import React from "react";
import man from "../../assets/man.png";
import manMobile from "../../assets/manMobile.png";
import manTablet from "../../assets/manTablet.png";
import '../../custom.css'

function ManCard() {
    return (
        <>
            {/*  DescriptionSection with ManPictures   */}
            <div
                className="manCard px-8 lg:px-40 py-10 flex flex-col-reverse md:flex-row justify-between items-center rounded-md gap-y-5 md:gap-y-0">
                {/* Description */}
                <div className="w-full lg:w-1/2 text-center lg:text-left my-auto">
                    <h2 className="w-full lg:w-4/5 text-black text-2xl md:text-5xl text-center lg:text-left py-3 md:py-5 font-semibold">
                        BRINGING YOU THE <span className="text-cta">BEST</span> AUDIO HEAR
                    </h2>
                    <p className="text-sm sm:text-sm md:text-base lg:text-sm w-full sm:w-3/5 md:w-full md:m-0 m-auto py-2 pb-5 font-normal text-footerText tracking-wider leading-6">
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                        rooms available for you to browse and experience a wide range of our products. Stop by our store
                        to meet some of the fantastic people who make Audiophile the best place to buy your portable
                        audio equipment.
                    </p>
                </div>
                <div className="w-full lg:w-auto">
                    <img src={man} className="w-full  border rounded-xl lg:block hidden"
                         alt="Man with headphones"/>
                </div>
                <div className="w-full lg:w-auto">
                    <img src={manTablet} className="w-full  border rounded-xl lg:hidden md:block hidden"
                         alt="Man with headphones"/>
                </div>
                <img src={manMobile} className="w-full border rounded-xl lg:hidden md:hidden sm:block block"
                     alt="Man with headphones"/>
                <div className="w-full lg:w-auto">

                </div>
            </div>
        </>
    );
}

export default ManCard;