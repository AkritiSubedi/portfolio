import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide_image1 from "vite.svg";
import slide_image2 from "vite.svg";
import slide_image3 from "vite.svg";
import slide_image4 from "vite.svg";

function Mainproject() {
  return (
    <div className="projectcont">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image4} alt="slide_image" />
        </SwiperSlide>
        <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow"></div>
        </div>
        
      </Swiper>
    </div>
  );
}
export default Mainproject;
