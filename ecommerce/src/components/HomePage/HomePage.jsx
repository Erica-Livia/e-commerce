import React from "react";
import headphone from '../../assets/headphones/headphonesHero1.png';
import speaker from '../../assets/speakers/speaker-cut.png';
import speakers from '../../assets/speakers/speaker-cut.png'
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
                            Experience natural, lifelike audio and exceptional build quality made for the passionate
                            music enthusiast.
                        </p>
                        <button className="py-3 px-8 w-fit text-sm font-semibold text-white bg-cta hover:bg-lightCta tracking-wider">SEE
                            PRODUCT
                        </button>
                    </div>
                    <div className="hidden md:block md:w-1/2 overflow-hidden">
                        <img src={headphone} alt="headphones" className="w-full"/>
                    </div>
                </div>


                {/* Links to Products Page */}
                <div className="px-8 md:px-28 sm:px">
                    <GroupCard />
                </div>

                {/* ZX9 SpeakerSection */}
                {/*<div className="px-28 py-10">*/}
                {/*    <div className="bg-cta mx-auto flex justify-around items-center pt-20 rounded-md">*/}
                {/*        <img src={speakers} className="w-1/5"/>*/}
                {/*        <div className="text-footerText">*/}
                {/*            <h2 className="text-white text-5xl w-3/5 py-5 font-bold ">ZX9 SPEAKER</h2>*/}
                {/*            <p className="text-darkWhite text-sm w-3/5 py-5 font-light">Upgrade to premium speakers that*/}
                {/*                are*/}
                {/*                phenomenally built to deliver truly remarkable sound.</p>*/}
                {/*            <button*/}
                {/*                className="pt-3 pb-3 pr-5 pl-5 w-fit text-sm text-white bg-lightBlack hover:opacity-80">SEE*/}
                {/*                PRODUCT*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/* ZX7 SpeakerSection */}
                {/*<div className="px-28">*/}
                {/*    <div className={`mx-auto flex justify-around items-center py-20 right rounded-md`}*/}
                {/*         style={{backgroundImage: `url(${speaker})`}}>*/}
                {/*        <div className="text-footerText w-1/5 left-0">*/}
                {/*            <h2 className="text-black text-5xl w-3/5 py-5 font-bold ">ZX7 SPEAKER</h2>*/}
                {/*            <button*/}
                {/*                className="pt-3 pb-3 pr-5 pl-5 w-fit text-sm text-black border border-black  hover:opacity-80">SEE*/}
                {/*                PRODUCT*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <img src={speakers} width={0}/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/* YX1 EarphoneSection   */}

                {/*  DescriptionSection with ManPictures   */}

            </div>
        </div>
    )
}

export default HomePage;