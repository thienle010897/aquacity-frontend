import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import HomePage from "../trang-chu";
import Ground from "../mat-bang";
import Position from "../vi-tri";
import Ecological from "../sinh-thai";
import Utilities from "../tien-ich";
export default function Containers() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <HomePage/>
        </SwiperSlide>
        <SwiperSlide>
            <Ground/>
        </SwiperSlide>
        <SwiperSlide>
            <Position/>
        </SwiperSlide>
        <SwiperSlide>
            <Ecological/>
        </SwiperSlide>
        <SwiperSlide>
            <Utilities/>
        </SwiperSlide>
        {/* <SwiperSlide>
            </>
        </SwiperSlide>
        <SwiperSlide>
            </>
        </SwiperSlide>
        <SwiperSlide>
            </>
        </SwiperSlide>
        <SwiperSlide>
            </>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}