import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import { Mousewheel, Pagination, EffectCreative } from 'swiper';
import styles from './styles.module.scss';
import data from '../../contants/dataSubdivision.json';
import { CardMedia } from '@material-ui/core';

export default function Subdivision() {
  return (
    <>
      <div className={styles.container}>
        <Swiper
          speed={1000}
          grabCursor={true}
          slidesPerView={'auto'}
          // spaceBetween={30}
          className='mySwiper'
        >
          {data.map((img) => (
            <SwiperSlide key={img.id}>
              <CardMedia
                image={img.image}
                style={{ height: 350, width: 700 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
