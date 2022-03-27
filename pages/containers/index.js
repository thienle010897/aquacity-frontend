import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import { Mousewheel, Pagination, EffectCreative } from 'swiper';
import HomePage from '../trang-chu';
import Ground from '../mat-bang';
import Position from '../vi-tri';
import Ecological from '../sinh-thai';
import Utilities from '../tien-ich';
import navs from '../../contants/navs.json';
export default function Containers() {
  const [direction, setDirection] = useState();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        (index + 1) +
        '<div class="swiper-content"> ' +
        navs[index].name +
        '</div>' +
        '</span>'
      );
    },
  };
  console.log(direction);
  return (
    <>
      <Swiper
        speed={1000}
        direction={'vertical'}
        effect={'creative'}
        grabCursor={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, '0%', -1],
          },
          next: {
            shadow: true,
            translate: [0, '100%', 0],
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={pagination}
        modules={[Mousewheel, Pagination, EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HomePage />
        </SwiperSlide>
        <SwiperSlide>
          <Ground />
        </SwiperSlide>
        <SwiperSlide>
          <Position />
        </SwiperSlide>
        <SwiperSlide>
          <Ecological />
        </SwiperSlide>
        <SwiperSlide>
          <Utilities />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
