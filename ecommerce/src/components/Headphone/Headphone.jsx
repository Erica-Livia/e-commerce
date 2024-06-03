import React from "react";
import markII from "../../assets/headphones/headphones4.png"
import xx99 from "../../assets/headphones/headphones1.png"
import xx59 from "../../assets/headphones/headphones2.png"

function Headphone() {
    return(
        <>
            <div className="">
                {/* Headphone HeroSection */}
                <div className="bg-lightBlack flex justify-center text-white text-4xl h-2/3 w-full py-10">
                    <h1>HEADPHONES</h1>
                </div>

                {/* HeaphoneList Display */}

                {/* Item1 */}
                <div className="mx-auto flex justify-around items-center px-28 py-8">
                    <div className="w-1/2">
                        <img src={markII} alt="headphones" className="w-80 h-100 bg-darkWhite p-20"/>
                    </div>

                    {/* Description */}
                    <div className="text-cta w-1/2">
                        <h1>NEW PRODUCT</h1>

                        <h2 className="text-black text-5xl w-3/5 py-5 font-bold ">XX99 MARK II HEADPHONES</h2>
                        <p className="text-lightBlack text-sm w-3/5 py-5 font-light">Experience natural, lifelike audio
                            and exceptional build quality made for the passionate music enthusiast.</p>
                        <button className="pt-3 pb-3 pr-5 pl-5 w-fit text-sm text-white bg-cta hover:bg-lightCta">SEE
                            PRODUCT
                        </button>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="mx-auto flex justify-around items-center px-28 py-8">
                    {/* Description */}
                    <div className="text-cta w-1/2">
                        <h1>NEW PRODUCT</h1>

                        <h2 className="text-black text-5xl w-3/5 py-5 font-bold ">XX99 MARK II HEADPHONES</h2>
                        <p className="text-lightBlack text-sm w-3/5 py-5 font-light">Experience natural, lifelike audio
                            and exceptional build quality made for the passionate music enthusiast.</p>
                        <button className="pt-3 pb-3 pr-5 pl-5 w-fit text-sm text-white bg-cta hover:bg-lightCta">SEE
                            PRODUCT
                        </button>
                    </div>

                    <div className="w-1/2">
                        <img src={xx99} alt="headphones" className="w-80 h-100 bg-darkWhite p-20"/>
                    </div>

                </div>

                {/* Item 3 */}
                <div className="mx-auto flex justify-around items-center px-28 py-8">
                    <div className="w-1/2">
                        <img src={xx59} alt="headphones" className="w-80 h-100 bg-darkWhite p-20"/>
                    </div>
                    {/* Description */}
                    <div className="text-cta w-1/2">
                        <h1>NEW PRODUCT</h1>

                        <h2 className="text-black text-5xl w-3/5 py-5 font-bold ">XX99 MARK II HEADPHONES</h2>
                        <p className="text-lightBlack text-sm w-3/5 py-5 font-light">Experience natural, lifelike audio
                            and exceptional build quality made for the passionate music enthusiast.</p>
                        <button className="pt-3 pb-3 pr-5 pl-5 w-fit text-sm text-white bg-cta hover:bg-lightCta">SEE
                            PRODUCT
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Headphone;