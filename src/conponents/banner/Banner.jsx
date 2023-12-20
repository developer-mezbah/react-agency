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
          <SlideItem title={"Grow your brand through digital"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem title={"MERN development"} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem title={"MERN development"} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem title={"MERN development"} />
        </SwiperSlide>
        
      </Swiper>
      {/* <SlideItem/> */}
    </>
  );
};
