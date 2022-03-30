import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from "./styles.module.scss";
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import MenuList from './MenuList';

const Header = () => {
  const [isMemu, setIsMenu] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const handdleChange = () => {
    if(isMemu === false){
      setIsMenu(true)
    } else {
      setIsActive(false)
      const time = setTimeout(()=> {
        setIsMenu(false)
      }, 1000)
      return ()=> clearTimeout(time)
    }
    
  }
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="https://aquacity.com.vn/wp-content/themes/aquacity/resources/assets/logo.png"/>
      </div>
      <span className={styles.menu}
        onClick={handdleChange}
      >
        <h1 className={clsx({
          [styles.active] : isMemu === false
        })}>MENU</h1>
        <div className={clsx({
          [styles.active] : isMemu === true
        })}>
          <CloseIcon className={styles.icon}/>
        </div>
      </span>
      <div className={clsx(styles.menuList, {
      [styles.active] : isMemu
      })}>
        <MenuList isMemu={isMemu} isActive={isActive} setIsActive={setIsActive}/>
      </div>
    </div>
  );
};
 
export default Header;
