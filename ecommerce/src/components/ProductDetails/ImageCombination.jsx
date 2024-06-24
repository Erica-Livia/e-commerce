import React from 'react';

const ImageCombination = ({ images }) => {
    console.log('Images received by ImageCombination:', images);
    return (
        <div className="grid grid-cols-2 gap-24 py-10 w-full content-center">
            <div className="grid grid-rows-2 gap-4">
                <img src={images[0]} alt="Random" className="w-full h-64 object-cover rounded-xl" />
                <img src={images[1]} alt="Random" className="w-full h-64 object-cover rounded-xl" />
            </div>
            <img src={images[2]} alt="Random" className="w-full h-full object-cover rounded-xl" />
        </div>
    );
};

export default ImageCombination;
