import { CardMedia } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.scss";

export default function Ground({ active }) {
  return (
    <div className={styles.ground}>
        <div className={styles.imgMapCanvs}>
          <img
            src="https://aquacity.com.vn/wp-content/uploads/2021/05/phoenix-resize-rgb.jpg"
            alt=""
          />
        </div>
        <div
          className={clsx(styles.content, {
            [styles.active]: active === 1,
          })}
        >
          <div
            className={clsx(styles.cloud, {
              [styles.active]: active === 1,
            })}
          >
            <img src="https://aquacity.com.vn/wp-content/themes/aquacity/resources/assets/index/cloud.png" />
          </div>
          <div className={clsx(styles.container, {
            [styles.active]: active === 1,
          })}>
            <div className={styles.text}>
              <h2>
                đô thị <b>sinh thái thông minh</b>
                <br></br>
                phía đông tp.hcm
              </h2>
            </div>
          </div>
        </div>
    </div>
  );
}
