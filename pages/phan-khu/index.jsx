import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./slider.module.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";

export default function Sliders() {
  return (
    <div className={styles.sliders}>
      <div className={styles.slider}>
        <div className={styles.ar_content}>
          <Swiper
            style={{ maxWidth: "960px" }}
            centeredSlides={true}
            slidesPerView={1.097}
            speed={1200}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={styles.item}>
                <Link href="/">
                  <img
                    src="https://aquacity.com.vn/wp-content/uploads/2021/12/Background-trainghiemtour-01-1.jpg"
                    alt=""
                  />
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
            <SwiperSlide>
              <div className={styles.item}>
                <Link href="/">
                  <img
                    src="https://aquacity.com.vn/wp-content/uploads/2021/12/Background-trainghiemtour-01-1.jpg"
                    alt=""
                  />
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
            <SwiperSlide>
              <div className={styles.item}>
                <Link href="/">
                  <img
                    src="https://aquacity.com.vn/wp-content/uploads/2021/12/Background-trainghiemtour-01-1.jpg"
                    alt=""
                  />
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
            <SwiperSlide>
              <div className={styles.item}>
                <Link href="/">
                  <img
                    src="https://aquacity.com.vn/wp-content/uploads/2021/04/dao-phuong-hoang-thumbnail.jpg"
                    alt=""
                  />
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
            <SwiperSlide>
              <div className={styles.item}>
                <Link href="/">
                  <img
                    src="https://aquacity.com.vn/wp-content/uploads/2021/04/dao-phuong-hoang-thumbnail.jpg"
                    alt=""
                  />
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
          </Swiper>
        </div>
      </div>
    </div>
  );
}
