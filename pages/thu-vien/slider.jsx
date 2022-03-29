import React from "react";
import { useRef, useEffect, useState } from "react";
import styles from "./slider.module.scss";

export default function Slider() {
  return (
    <div className={styles.carousel}>
      <div className={styles.inner}>
        <div className={styles.item}>
          <img
            src="https://aquacity.com.vn/wp-content/uploads/2022/03/thumbnail-tvc-aqua-city.png"
            alt=""
          />
        </div>
        <div className={styles.item}>
          <img
            src="https://aquacity.com.vn/wp-content/uploads/2022/03/thumbnail-tvc-aqua-city.png"
            alt=""
          />
        </div>
        <div className={styles.item}>
          <img
            src="https://aquacity.com.vn/wp-content/uploads/2022/03/thumbnail-tvc-aqua-city.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
