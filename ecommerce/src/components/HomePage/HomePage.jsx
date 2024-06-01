import React from "react";
import headphone from '../../assets/headphones/headphonesHero.png';
import headphones from '../../assets/headphones/headphones1.png';
import speakers from '../../assets/speakers/speakers1.png';
import earphones from '../../assets/earphones/earphones.png';
import speaker from '../../assets/speakers/speaker-cut.png';
import { IoIosArrowForward } from "react-icons/io";


function HomePage () {
    return (
        <div className="bg-white">
            <div className="pb-8 items-center">
                <div className="bg-lightBlack mx-auto flex justify-between items-center px-28 py-8">
                    <div className="text-footerText">
                        <h1>NEW PRODUCT</h1>

                        <h2 className="text-white text-5xl w-3/5 py-5 font-bold ">XX99 MARK II HEADPHONES</h2>
                        <p className="text-darkWhite text-sm w-3/5 py-5 font-light">Experience natural, lifelike audio
                            and exceptional build quality made for the passionate music enthusiast.</p>
                        <button className="pt-3 pb-3 pr-5 pl-5 w-fit text-sm text-white bg-cta hover:bg-lightCta">SEE
                            PRODUCT
                        </button>
                    </div>
                    <div className="">
                        <img src={headphone} alt="headphones" className="w-4/5"/>
                    </div>
                </div>

                <div className="px-28">
                    <div className="bg-white mx-auto flex justify-around items-center py-20 w-full px-0 gap-x-5">
                        <div className="bg-darkWhite w-1/3 h-50 p-5">
                            <img src={headphones} className="w-20 h-50 pb-5"/>
                            <div>
                                <p>HEADPHONES</p>
                                <div className="flex items-center">
                                    <p>SHOP</p>
                                    <IoIosArrowForward/>
                                </div>

                            </div>
                        </div>

                        <div className="bg-darkWhite w-1/3 h-50 p-5">
                            <img src={speakers} className="w-20 h-50 pb-5"/>
                            <div>
                                <p>HEADPHONES</p>
                                <div className="flex items-center">
                                    <p>SHOP</p>
                                    <IoIosArrowForward/>
                                </div>

                            </div>
                        </div>

                        <div className="bg-darkWhite w-1/3 h-50 p-5">
                            <img src={earphones} className="w-20 h-50 pb-5"/>
                            <div>
                                <p>HEADPHONES</p>
                                <div className="flex items-center">
                                    <p>SHOP</p>
                                    <IoIosArrowForward/>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                <div className="px-28 py-10">
                    <div className="bg-cta mx-auto flex justify-around items-center pt-20 rounded-md">
                        <img src={speakers} className="w-1/5"/>
                        <div className="text-footerText">
                            <h2 className="text-white text-5xl w-3/5 py-5 font-bold ">ZX9 SPEAKER</h2>
                            <p className="text-darkWhite text-sm w-3/5 py-5 font-light">Upgrade to premium speakers that
                                are
                                phenomenally built to deliver truly remarkable sound.</p>
                            <button
                                className="pt-3 pb-3 pr-5 pl-5 w-fit text-sm text-white bg-lightBlack hover:opacity-80">SEE
                                PRODUCT
                            </button>
                        </div>
                    </div>
                </div>

                <div className="px-28">
                    <div className={`mx-auto flex justify-around items-center py-20 right rounded-md`} style={{backgroundImage: `url(${speaker})`}}>
                        <div className="text-footerText w-1/5 left-0">
                            <h2 className="text-black text-5xl w-3/5 py-5 font-bold ">ZX7 SPEAKER</h2>
                            <button
                                className="pt-3 pb-3 pr-5 pl-5 w-fit text-sm text-black border border-black  hover:opacity-80">SEE
                                PRODUCT
                            </button>
                        </div>
                        <div>
                            <img src={speakers} width={0}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;