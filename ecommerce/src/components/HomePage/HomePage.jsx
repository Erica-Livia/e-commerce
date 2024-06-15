import React from "react";
import headphone from '../../assets/headphones/headphonesHero1.png';
import speaker from '../../assets/speakers/speaker-cut.png';
import speakers from '../../assets/speakers/speakers1.png'
import GroupCard from "../../components/Cards/GroupCard.jsx";
import '../../custom.css';

function HomePage () {
    return (
        <div className="bg-white font-light">
            <div className="pb-8 items-center">

                {/* HomePage HeroSection */}
                <div id="heroSection"
                     className="bg-darkBgColor mx-auto px-5 flex justify-center items-center md:justify-between md:px-32 overflow-hidden">
                    <div className="text-footerText w-full md:w-1/2 text-center md:text-left py-16 md:py-14">
                        <h1 className="newProduct tracking-widest">NEW PRODUCT</h1>
                        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl w-1/2 md:w-full md:m-0 m-auto py-3 font-semibold tracking-wider">XX99
                            MARK II HEADPHONES</h2>
                        <p className="text-white text-sm sm:text-sm md:text-base lg:text-sm w-4/5 sm:w-3/5 md:w-4/5 md:m-0 m-auto py-2 pb-5 font-light tracking-wide leading-6">
                            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                        </p>
                        <button
                            className="py-3 px-8 w-fit text-sm font-semibold text-white bg-cta hover:bg-lightCta tracking-wider">SEE
                            PRODUCT
                        </button>
                    </div>
                    <div className="hidden md:block md:w-1/2 overflow-hidden">
                        <img src={headphone} alt="headphones" className="w-full"/>
                    </div>
                </div>


                {/* Links to Products Page */}
                <div className="px-8 md:px-12 sm:px">
                    <GroupCard/>
                </div>

                {/* ZX9 SpeakerSection */}
                <div className="px-4 md:px-10 lg:px-32 py-10 relative overflow-hidden">
                    {/* Content Container */}
                    <div
                        className="bg-cta px-16 mx-auto flex flex-col md:flex-row justify-around items-center pt-20 rounded-md relative z-10 overflow-hidden">

                        {/* Speaker Image */}
                        <div className="relative w-1/2 md:w-96 mb-8 md:mb-0">
                            <img src={speakers} alt="Speakers" className="relative z-10 w-full"/>
                            {/* Circles */}
                            <div className="absolute inset-0 flex justify-center items-center z-0 mt-28 md:mt-52">
                                <div className="border border-lightCta rounded-full w-[900px] h-[900px] absolute"></div>
                                {/* 40cm diameter */}
                                <div className="border border-lightCta rounded-full w-[500px] h-[500px] absolute"></div>
                                {/* 36cm diameter */}
                                <div className="border border-lightCta rounded-full w-[420px] h-[420px] absolute"></div>
                                {/* 32cm diameter */}
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="text-footerText text-center md:text-left md:w-1/2 md:pl-12 z-10">
                            <h2 className="text-white text-4xl md:text-5xl py-3 md:py-5 font-bold w-full md:w-1/2">ZX9
                                SPEAKER</h2>
                            <p className="text-white text-sm sm:text-sm md:text-base lg:text-sm w-4/5 sm:w-3/5 md:w-4/5 md:m-0 m-auto py-2 pb-5 font-light tracking-wide leading-6">
                                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
                                sound.
                            </p>
                            <button className="py-3 px-8 my-2 text-sm text-white font-semibold bg-lightBlack hover:bg-footerText">SEE
                                PRODUCT
                            </button>
                        </div>
                    </div>
                </div>


                {/*ZX7 SpeakerSection */}
                <div className="px-4 md:px-10 lg:px-32 py-10">
                    <div
                        className="mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center py-14 rounded-md"
                        style={{
                            backgroundImage: `url(${speaker})`,
                            backgroundSize: '110%', // Adjust this value to zoom in
                            backgroundPosition: 'bottom',
                            backgroundRepeat: 'no-repeat',
                            height: '400px'
                        }}>
                        <div className="text-footerText w-full md:w-1/2 text-left md:text-left py-5 px-20 md:py-10">
                            <h2 className="text-black text-4xl md:text-5xl py-3 md:py-5 font-bold">ZX7 SPEAKER</h2>
                            <button
                                className="pt-3 pb-3 pr-5 pl-5 my-3 text-sm font-semibold text-black border-2 border-black hover:opacity-80">SEE
                                PRODUCT
                            </button>
                        </div>
                    </div>
                </div>


                {/* YX1 EarphoneSection   */}

                {/*  DescriptionSection with ManPictures   */}

            </div>
        </div>
    )
}

export default HomePage;