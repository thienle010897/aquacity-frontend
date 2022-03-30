import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import HomePage from "../trang-chu";
import Ground from "../mat-bang";
import Position from "../vi-tri";
import Ecological from "../sinh-thai";
import Utilities from "../tien-ich";
import Sliders from "../phan-khu/phankhu";
import styles from "./styles.module.scss";
import NavBars from "../../components/NavBars";
import clsx from "clsx";
import Library from "../thu-vien";
import News from "../tin-tuc";
import Register from "../dang-ky-nhan-thong-tin";
import Infor from "../thong-tin-chung";

export default function Containers() {
  const [active, setActive] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  const [timeStamp, settimeStamp] = useState(0);

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleOnWheel = (event) => {
    if (Number(event.nativeEvent.timeStamp) - timeStamp > 1000) {
      setPrevIndex(active);

      if (event.nativeEvent.deltaY > 0) {
        setActive((prev) => {
          if (prev < 9) {
            return prev + 1;
          } else {
            return 9;
          }
        });
      } else {
        setActive((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            return 0;
          }
        });
      }
      settimeStamp(event.nativeEvent.timeStamp);
      const timeOut = setTimeout(() => setPrevIndex(null), 800);
      return () => clearTimeout(timeOut);
    }
  };

  return (
    <div className={styles.containers} onWheel={handleOnWheel}>
      <NavBars
        setPrevIndex={setPrevIndex}
        setActive={setActive}
        active={active}
        prevIndex={prevIndex}
      />
      {nums.map((item, index) => (
        <div
          key={index}
          className={clsx(styles.slide, {
            [styles.active]: active === index,
            [styles.current]: prevIndex === index,
            [styles.beforeActive]: active > index,
            [styles.afterActive]: active < index,
          })}
        >
          {index === 0 && <HomePage />}
          {index === 1 && <Ground active={active} />}
          {index === 2 && <Position />}
          {index === 3 && <Ecological active={active} />}
          {index === 4 && <Utilities />}
          {index === 5 && <Sliders />}
          {index === 6 && <Library active={active} />}
          {index === 7 && <News active={active} />}
          {index === 8 && <Register />}
          {index === 9 && <Infor />}
        </div>
      ))}
    </div>
  );
}
