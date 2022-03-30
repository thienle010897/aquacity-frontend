import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./slider.module.scss";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Sliders({ active }) {
  const img = [
    {
      img: "https://aquacity.com.vn/wp-content/uploads/2022/03/thumbnail-tvc-aqua-city.png",
      title:
        "BÌNH MINH – ANH THƠ: “AQUA CITY ĐẸP NHƯ NHỮNG KHU NGHỈ DƯỠNG SANG TRỌNG”",
    },
    {
      img: "https://aquacity.com.vn/wp-content/uploads/2022/03/thumbnail-website-aqua-city-12.png",
      title:
        "VỢ CHỒNG MC THANH THẢO HUGO: “CHOÁNG NGỢP VỚI TỔ HỢP QUẢNGTRƯỜNG – BẾN DU THUYỀN AQUA MARINA”",
    },
    {
      img: "https://aquacity.com.vn/wp-content/uploads/2022/03/thumbnail-website-aqua-city.png",
      title:
        "Novaland, VinaLiving bắt tay Fusion mang đến trải nghiệm sống nghỉ dưỡng tại Aqua City",
    },
    {
      img: "https://aquacity.com.vn/wp-content/uploads/2021/12/hinh-7.png",
      title: "KHÁCH HÀNG BẤT NGỜ VỚI DIỆN MẠO MỚI CỦA AQUA CITY",
    },
  ];
  return (
    <div
      className={clsx(styles.carousel, {
        [styles.active]: active === 6,
      })}
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        loop={true}
        speed={1200}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {img &&
          img.map((data, index) => (
            <SwiperSlide className={styles.items} key={index}>
              <div className={styles.item}>
                <img src={data.img} alt="" />
                <div className={styles.text}>
                  <h3>{data.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
