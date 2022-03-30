import clsx from "clsx";
import React from "react";
import TransitionsModal from "./Modal";
import Sliders from "./slider";
import styles from "./styles.module.scss";

export default function Library({ active }) {
  return (
    <div className={styles.library}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>Thư viện</h2>
        </div>
        <div className={styles.video}>
          <TransitionsModal active={active} />
        </div>
        <div className={styles.videos}>
          <Sliders active={active} />
        </div>
      </div>
    </div>
  );
}
