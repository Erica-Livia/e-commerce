import React from "react";
import headphone from '../../assets/headphones/headphonesHero1.png';
import speaker from '../../assets/speakers/speaker-cut.png';
import speakers from '../../assets/speakers/speakers1.png';
import earphone2 from '../../assets/earphones/earphone2s.png';
import GroupCard from "../../components/Cards/GroupCard.jsx";
import '../../custom.css';
import ManCard from "../../components/Cards/ManCard.jsx";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="bg-white font-light">
            <div className="pb-8 items-center">
                {/* HomePage HeroSection */}
                <div id="heroSection"
                     className="bg-darkBgColor mx-auto px-4 lg:px-40 text-center md:text-center lg:text-left  flex justify-center items-center md:justify-between md:px-40 overflow-hidden">
                    <div className="text-footerText w-full md:w-full lg:w-2/3 lg:py-14 md:py-10 sm:py-8">
                        <h1 className="newProduct tracking-widest text-base sm:text-lg">NEW PRODUCT</h1>
                        <h2 className="text-white w-full lg:w-4/5 text-2xl sm:text-3xl md:text-5xl lg:text-5xl md:m-0 m-auto py-3 font-semibold tracking-wider">XX99
                            MARK II HEADPHONES</h2>
                        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl w-full lg:w-4/5 md:m-0 m-auto py-2 pb-5 font-light tracking-wide leading-6">
                            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                        </p>
                        <Link to={"/product-detail/1"}>
                            <button
                                className="py-3 px-8 w-fit text-sm md:text-base font-semibold text-white bg-cta hover:bg-lightCta tracking-wider">SEE
                                PRODUCT
                            </button>
                        </Link>

                    </div>
                    <div className="hidden lg:block md:w-1/2 overflow-hidden">
                        <img src={headphone} alt="headphones" className="w-full heroImage" />
                    </div>
                </div>

                {/* Links to Products Page */}
                <div className="px-8 lg:px-20 md:px-0 sm:px-4">
                    <GroupCard />
                </div>

                {/* ZX9 SpeakerSection */}
                <div className="px-4 md:px-10 lg:px-40 py-10 relative overflow-hidden">
                    {/* Content Container */}
                    <div className="bg-cta px-16 mx-auto flex flex-col lg:flex-row justify-around items-center py-20 lg:pb-0 rounded-md relative z-10 overflow-hidden">
                        {/* Speaker Image */}
                        <div className="relative w-1/2 md:w-80 lg:w-96 mb-8 md:mb-0">
                            <img src={speakers} alt="Speakers" className="relative z-10 w-full lg:w-full md:w-full" />
                            {/* Circles */}
                            <div className="absolute inset-0 flex justify-center items-center z-0 mt-28 md:mt-52">
                                <div className="border border-lightCta rounded-full w-[900px] h-[900px] absolute"></div>
                                <div className="border border-lightCta rounded-full w-[500px] h-[500px] absolute"></div>
                                <div className="border border-lightCta rounded-full w-[420px] h-[420px] absolute"></div>
                            </div>
                        </div>
                        {/* Text Content */}
                        <div className="text-footerText text-center lg:text-left w-full lg:w-1/2 lg:pl-12 z-10">
                            <h2 className="text-white text-center lg:text-left  text-4xl md:text-5xl lg:text-5xl py-3 md:py-5 font-bold">ZX9 SPEAKER</h2>
                            <p className="text-white text-center lg:text-left text-sm sm:text-base md:text-lg lg:text-xl w-full lg:w-4/5 md:m-0 m-auto py-2 pb-5 font-light tracking-wide leading-6">
                                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                            </p>
                            <Link to={"/product-detail/5"}>
                                <button className="py-3 px-4 md:px-8  my-2 text-sm md:text-base text-white font-semibold bg-lightBlack hover:bg-footerText">SEE
                                PRODUCT
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ZX7 SpeakerSection */}
                <div className="px-4 md:px-10 lg:px-40 py-10">
                    <div
                        className="mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center py-14 rounded-md"
                        style={{
                            backgroundImage: `url(${speaker})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            height: '400px',
                        }}
                    >
                        <div className="text-footerText pl-4 w-full md:w-1/2 text-left py-5 px-10 md:px-20 md:py-10">
                            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl py-3 md:py-5 font-bold">ZX7 SPEAKER</h2>
                            <Link to={"/product-detail/6"}>
                                <button
                                    className="py-3 px-4 md:px-8 my-2 text-sm md:text-base font-semibold text-black border-2 border-black hover:opacity-80">
                                    SEE PRODUCT
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>

                {/* YX1 EarphoneSection */}
                <div className="px-4 md:px-10 lg:px-40 py-10">
                    <div className="flex flex-col md:flex-row justify-center md:justify-around items-center rounded-5xl gap-y-2 md:gap-0 lg:gap-8">
                        <div className="h-full w-full md:w-auto">
                            <img src={earphone2} className='w-full h-auto md:h-full border-2 rounded-5xl' />
                        </div>
                        <div className="bg-darkWhite center m-auto p-8 md:p-12 lg:p-24 rounded-xl w-full md:w-auto">
                            <h2 className="text-black text-3xl md:text-4xl py-2 md:py-5 font-bold">YX1 EARPHONES</h2>

                            <Link to={"/product-detail/7"}>
                                <button
                                className="py-2 px-4 md:px-8  my-2 text-sm md:text-base font-semibold text-black border-2 border-black hover:opacity-80">
                                SEE PRODUCT
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <ManCard />
            </div>
        </div>
    );
}

export default HomePage;
