import React from "react";
import styles from "./styles.module.scss";

export default function Utilities() {
  return (
    <>
      <div className={styles.video}>
        <video autoPlay loop muted playsInline className={styles.ofcv}>
          <source
            src="https://aquacity.com.vn/wp-content/uploads/2021/05/banner.mp4"
            type="video/mp4"
            width="100%"
          />
        </video>
      </div>
    </>
  );
}
