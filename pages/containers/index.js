import React, { useEffect, useRef, useState } from "react";
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

import styles from "./styles.module.scss";
import NavBars from "../../components/NavBars";

export default function Containers() {
    const [active, setActive] = useState(0);
    const [z, setZ] = useState(10);
    const [zHidden, setZHidden] = useState(1);
    useEffect(()=> {

    }, [])

  return (
    <div className={styles.containers}>
        <NavBars setActive={setActive} active={active}/>
        <div className={styles.slide}
            style={active === index ? {zIndex: 22}: {zIndex: 1}}
        >
            <HomePage/>
        </div>
        <div className={styles.slide}
            style={active === index ? {zIndex: 22}: {zIndex: 1}}
        >
            <Ground/>
        </div>
        <div className={styles.slide}
            style={active === index ? {zIndex: 22}: {zIndex: 1}}
        >
            <Position/>
        </div>
        <div className={styles.slide}
            style={active === index ? {zIndex: 22}: {zIndex: 1}}
        >
            <Ecological/>
        </div>
        <div className={styles.slide}
            style={active === index ? {zIndex: 22}: {zIndex: 1}}
        >
            <Utilities/>
        </div>
            

      {/* <Swiper
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
        
      </Swiper> */}
    </div>
  );
}