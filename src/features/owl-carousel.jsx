import React, { useRef, useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

function OwlCarousel ( props ) {
    const { adClass, options, events, isTheme = true } = props;

    return (
        <Swiper
            autoHeight={true}
            spaceBetween={0}
            navigation={false}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className={ `mySwiper ${adClass}` }
            pagination={{ clickable: true }}
            scrollbar={{ draggable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                props.children.map(child => (
                    <SwiperSlide>{child}</SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default OwlCarousel;