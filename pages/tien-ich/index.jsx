import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import data from '../../contants/dataUtilities.json';
export default function Utilities() {
  return (
    <div style={{ position: 'relative' }}>
      <div className={styles.imgMapCanvs}>
        <div className={styles.imgMap}>
          <img src='/images/ground.jpg' alt='' />
        </div>
      </div>
      <div className={styles.content}>
        <Typography variant='h6'>Tiện ích AquaCity</Typography>
        <Grid container>
          <Grid item xs={6} className={styles.text}>
            {data.slice(0, 7).map((content, index) => (
              <li key={index}>
                {content.id}.{content.title}
              </li>
            ))}
          </Grid>
          <Grid item xs={6} className={styles.text}>
            {data.slice(7).map((content, index) => (
              <li key={index}>
                {content.id}.{content.title}
              </li>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
