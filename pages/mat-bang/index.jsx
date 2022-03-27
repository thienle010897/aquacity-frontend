import React from 'react';
import Cloud from '../../components/CloudBottom';
import styles from './styles.module.scss';

export default function Ground() {
  return (
    <div style={{ position: 'relative' }}>
      <div className={styles.imgMapCanvs}>
        <div className={styles.imgMap}>
          <img src='/images/ground.jpg' alt='' />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>
            <p>
              đô thị <strong>sinh thái thông minh</strong>
              <br />
              phía đông tp.hcm
            </p>
          </h2>
        </div>
      </div>
      <Cloud />
    </div>
  );
}
