import React from 'react';
import styles from './styles.module.scss';
import { CardMedia } from '@material-ui/core';

export default function Position() {
  return (
    <>
      <div className={styles.container}>
        <CardMedia className={styles.image} image='/images/position.jpg' />
      </div>
    </>
  );
}
