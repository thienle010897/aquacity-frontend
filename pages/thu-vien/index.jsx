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
        <div
          className={clsx(styles.video, {
            [styles.active]: active === 6,
          })}
        >
          <TransitionsModal active={active} />
        </div>
        <div
          className={clsx(styles.videos, {
            [styles.active]: active === 6,
          })}
        >
          <Sliders />
        </div>
      </div>
    </div>
  );
}
