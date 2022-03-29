import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

const ViewControl = () => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div className={styles.controls}>
      <span className={styles.viewControl}>
        <div
          className={clsx(styles.bg, {
            [styles.active]: isHovered,
          })}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <h3>
            Sa bàn 360 <sup>o</sup>
          </h3>
        </div>
        <div
          className={clsx(styles.bg, {
            [styles.active]: isHovered,
          })}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <h3>Toàn cảnh dự án </h3>
        </div>
        <div
          className={styles.button}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <h3>
            Toàn cảnh 360<sup>o</sup>
          </h3>
        </div>
      </span>
    </div>
  );
};

export default ViewControl;
