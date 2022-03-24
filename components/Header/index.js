import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from "./styles.module.scss";

const Header = () => {
  
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="https://aquacity.com.vn/wp-content/themes/aquacity/resources/assets/logo.png"/>
      </div>
      <span className={styles.menu}>
        <h1>MENU</h1>
      </span>
    </div>
  );
};

export default Header;
