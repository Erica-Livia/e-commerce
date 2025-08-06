import React from 'react';

const ImageCombination = ({ images }) => {
    console.log('Images received by ImageCombination:', images);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24 py-10 w-full content-center">
            <div className="grid grid-rows-2 gap-4">
                <img src={images[0]} alt="Random" className="w-full h-64 object-cover rounded-xl" />
                <img src={images[1]} alt="Random" className="w-full h-64 object-cover rounded-xl" />
            </div>
            <img src={images[2]} alt="Random" className="w-full h-full md:h-auto object-cover rounded-xl mt-4 md:mt-0" />
        </div>
    );
};

export default ImageCombination;
