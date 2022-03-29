import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import HomeIcon from '@material-ui/icons/Home';
import GetAppIcon from '@material-ui/icons/GetApp';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import clsx from 'clsx';
import { Forward } from '@material-ui/icons';
import { useSwiper } from 'swiper/react';

const Controls = () => {
  return (
    <div className={styles.controls}>
      <div className={styles.controlsBlock}>
        <div className={clsx(styles.button, styles.home)}>
          <div className={styles.btn}>
            <HomeIcon className={styles.icon} />
          </div>
        </div>
        <div className={styles.register}>
          <div className={styles.bg}>
            <h3>ĐĂNG KÝ TƯ VẤN</h3>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.btn}>
            <GetAppIcon className={styles.icon} />
          </div>
          <div className={clsx(styles.content, styles.down)}>
            <h5>Tải Brochure</h5>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.btn}>
            <PhoneInTalkIcon className={styles.icon} />
          </div>
          <div className={clsx(styles.content, styles.phone)}>
            <h5>TP. Hồ Chí Minh: 00000000000</h5>
            <h5>Hà Nội: 111111111111</h5>
          </div>
        </div>
        <div className={styles.button}>
          <div className={clsx(styles.btn, styles.direction)}>
            <Forward className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
