import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

import styles from './styles.module.scss';
import data from '../../contants/dataSubdivision.json';
import { CardMedia } from '@material-ui/core';
import useSwiperRef from '../../contants/useSwiperRef';
import NextImage from 'next/image';
import Button from '../../public/images/button.png';
import clsx from 'clsx';
import { useSwiperSlide } from 'swiper/react';
export default function Subdivision() {
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();
  const swiperSlide = useSwiperSlide();
  console.log(swiperSlide.isActive);

  return (
    <>
      <Swiper
        navigation={{
          prevEl,
          nextEl,
        }}
        speed={1000}
        grabCursor={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        className={styles.container}
      >
        {data.map((img) => (
          <SwiperSlide
            key={img.id}
            className={clsx(styles.slide, {
              [styles.active]: swiperSlide.isActive,
            })}
          >
            <CardMedia className={styles.image} image={img.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button ref={prevElRef} className={clsx(styles.btn, styles.direction)}>
        <NextImage src={Button} />
      </button>
      <button ref={nextElRef} className={styles.btn}>
        <NextImage src={Button} />
      </button>
    </>
  );
}
