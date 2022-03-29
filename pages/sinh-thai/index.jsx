import React from 'react';
import styles from './styles.module.scss';
import { Grid } from '@material-ui/core';
import data from '../../contants/dataEcological.json';

export default function Ecological() {
  return (
    <>
      <div className={styles.video}>
        <video autoPlay loop muted playsInline className={styles.ofcv}>
          <source
            src='https://aquacity.com.vn/wp-content/uploads/2021/05/i_4.mp4'
            type='video/mp4'
          />
        </video>
        <Grid container justifyContent='center' className={styles.content}>
          <Grid item md={6} className={styles.description}>
            {data.slice(0, 4).map((content, index) => (
              <div
                key={index}
                className={styles.text}
                style={{ animationDelay: `${1 + content.id * 0.4}s` }}
              >
                <h4>{content.title}</h4>
                <p>{content.description}</p>
              </div>
            ))}
          </Grid>
          <Grid item md={5} className={styles.description}>
            {data.slice(4).map((content, index) => (
              <div
                key={content.id}
                className={styles.text}
                style={{ animationDelay: `${10 / content.id + 0.5}s` }}
              >
                <h4>{content.title}</h4>
                <p>{content.description}</p>
              </div>
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  );
}
