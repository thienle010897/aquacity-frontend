import { CardMedia } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.scss";

export default function Ground({active}) {
  return (
    <div className={styles.ground}>
      <div style={{ position: "relative" }}>
        <div className={styles.imgMapCanvs}>
          <img
            src="https://aquacity.com.vn/wp-content/uploads/2021/05/phoenix-resize-rgb.jpg"
            alt=""
          />
        </div>
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.text}>
              <h2>
                đô thị <b>sinh thái thông minh</b>
                <br></br>
                phía đông tp.hcm
              </h2>
            </div>
          </div>
        </div>
        <CardMedia
          className={styles.cloud}
          image="https://aquacity.com.vn/wp-content/themes/aquacity/resources/assets/index/cloud.png"
          alt=""
        />
      </div>
    </div>
  );
}
