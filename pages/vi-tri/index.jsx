import React from "react";
import styles from "./styles.module.scss";
import Vitri from "../../public/image/vi-tri.jpg"
import Image from 'next/image'

export default function Position() {
  return (
      <div className={styles.image}>
        <h2>Vị trí</h2>
        <img
          src="https://aquacity.com.vn/wp-content/uploads/2021/05/vitri_thumbnail_2-1-scaled.jpg"
          alt="Picture of the author"
        />
      </div>
  );
}
