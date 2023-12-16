import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import SlideItem from "./SlideItem";
import { Navigation } from 'swiper/modules';
import "./Banner.css";
import React from "react";


export const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="banner-swipper"
      >
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        
      </Swiper>
      {/* <SlideItem/> */}
    </>
  );
};
