import { CardMedia } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';

export default function Cloud() {
  return (
    <>
      {/* <div className="cloud"> */}
      <CardMedia image='/images/cloud.png' className={styles.image} />
      {/* </div> */}
    </>
  );
}
