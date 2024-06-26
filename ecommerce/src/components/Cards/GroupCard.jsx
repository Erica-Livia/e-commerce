import React from "react";
import headphones from '../../assets/headphones/headphones1.png';
import speakers from '../../assets/speakers/speakers1.png';
import earphones from '../../assets/earphones/earphones.png';
import Card from "./Card.jsx";

function GroupCard() {
    return (
        <>
            <div className="px-0 lg:px-20 md:px-12 sm:px-0 py-24 ">
                <div className="bg-white mx-auto flex flex-col sm:flex-row justify-around items-center py-20 w-full gap-y-16 gap-x-5 md:flex-row">
                    <Card
                        image={headphones}
                        title="HEADPHONES"
                        route="/headphones/"
                    />

                    <Card
                        image={speakers}
                        title="SPEAKERS"
                        route="/speakers/"
                        className="speakerImage"
                    />

                    <Card
                        image={earphones}
                        title="EARPHONES"
                        route="/earphones/"
                    />
                </div>
            </div>
        </>
    );
}

export default GroupCard;
