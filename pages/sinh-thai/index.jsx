import React from 'react';
import styles from './styles.module.scss';

export default function Ecological() {
  return (
    <>
      <div className={styles.video}>
        <video autoPlay loop muted playsInline className={styles.ofcv}>
          <source
            src='https://aquacity.com.vn/wp-content/uploads/2021/05/i_4.mp4'
            type='video/mp4'
            // width="100%"
          />
        </video>
        <div className={styles.text}>
          <h4>~ 1.000HA</h4>
          <p>Quy mô dự án</p>
        </div>
        <div className={styles.text}>
          <h4>~ 1.000HA</h4>
          <p>Quy mô dự án</p>
        </div>
        <div className={styles.text}>
          <h4>~ 1.000HA</h4>
          <p>Quy mô dự án</p>
        </div>
        <div className={styles.text}>
          <h4>~ 1.000HA</h4>
          <p>Quy mô dự án</p>
        </div>
        <div className={styles.text}>
          <h4>~ 1.000HA</h4>
          <p>Quy mô dự án</p>
        </div>
        <div className={styles.text}>
          <h4>~ 1.000HA</h4>
          <p>Quy mô dự án</p>
        </div>
        <div className={styles.text}>
          <h4>~ 1.000HA</h4>
          <p>Quy mô dự án</p>
        </div>
      </div>
    </>
  );
}
