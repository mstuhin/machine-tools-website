import React from 'react';
import banner from '../../images/banner3.jpg';
const Banner = () => {
    return (
        <div class="carousel w-full">
            <div id="slide4" class="carousel-item relative w-full">
                <img src={banner} class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                </div>
            </div>

        </div>
    );
};

export default Banner;