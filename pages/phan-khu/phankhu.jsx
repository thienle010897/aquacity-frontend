import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./phankhu.module.scss";
// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Link from "next/link";

export default function Sliders() {
  const img = [
    {
      img: "https://aquacity.com.vn/wp-content/uploads/2021/12/Background-trainghiemtour-01-1.jpg",
    },
    {
      img: "https://aquacity.com.vn/wp-content/uploads/2021/04/dao-phuong-hoang-thumbnail.jpg",
    },
    {
      img: "https://aquacity.com.vn/wp-content/uploads/2021/04/the-suite-1.jpg",
    },
    {
      img: "https://aquacity.com.vn/wp-content/uploads/2021/04/the-grand-villas.jpg",
    },
    // {
    //   //   img: "https://aquacity.com.vn/wp-content/uploads/2021/04/the-stella-thumbnail.png",
    // },
    {
      img: "https://aquacity.com.vn/wp-content/uploads/2021/04/the-valencia-river-park-2.jpg",
    },
  ];
  return (
    <div className={styles.sliders}>
      <div className={styles.mrb25}>
        <Swiper
          style={{ maxWidth: "950px" }}
          spaceBetween={20}
          hashNavigation={{
            watchState: true,
          }}
          speed={1300}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {img &&
            img.map((data, index) => (
              <SwiperSlide key={index} className={styles.mrb30}>
                <div className={styles.item}>
                  <Link href="/">
                    <img src={data.img} alt="" />
                  </Link>
                  <div className={styles.content}>
                    <div className={styles.desc_box}>
                      <div className={styles.row_content}>
                        <div className={styles.col_content}>
                          <h2>Hành trình tham quan</h2>
                        </div>
                        <div className={styles.col_contents}>
                          <p>điểm đến phồn hoa</p>
                          <p>Sinh thái giao hoà</p>
                        </div>
                      </div>
                    </div>
                    <span>khám phá ngay</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
