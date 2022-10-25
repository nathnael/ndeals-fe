import React, { useRef, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

function OwlCarousel ( props ) {

    return (
        <Swiper
            autoHeight={false}
            spaceBetween={20}
            navigation={false}
            pagination={{
            clickable: false,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
        >
            {
                props.children.map(child => (
                    <SwiperSlide className='intro-content'>{child}</SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default OwlCarousel;