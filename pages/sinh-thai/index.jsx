import React from "react";
import styles from "./styles.module.scss";

export default function Ecological() {
  return (
    <div >
      <div className={styles.imgMapCanvs}>
        <div className={styles.imgMap}>
          <img
            src="https://aquacity.com.vn/wp-content/uploads/2021/05/phoenix-resize-rgb.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.text}>
            <h2>
              <p>
                đô thị <b>sinh thái thông minh</b>
                <br></br>
                phía đông tp.hcm
              </p>
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.cloud}>
        <img
          src="https://aquacity.com.vn/wp-content/themes/aquacity/resources/assets/index/cloud.png"
          alt=""
        />
      </div>
    </div>
  );
}
