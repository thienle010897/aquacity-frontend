import React, { useState, useEffect } from 'react';
import styles from "./styles.module.scss";
import clsx from "clsx"
import Link from 'next/link';

const navs = [
  {
    name: "Trang chủ",
    link: "/",
  },
  {
    name: "Mặt bằng",
    link: "/",
  },
  {
    name: "Vị trí",
    link: "/",
  },
  {
    name: "Sinh thái",
    link: "/",
  },
  {
    name: "Tiện ích",
    link: "/",
  },
  {
    name: "Phân khu",
    link: "/",
  },
  {
    name: "Thư viện",
    link: "/",
  },
  {
    name: "Tin tức",
    link: "/",
  },
  {
    name: "Liên hệ",
    link: "/",
  },
  {
    name: "Thông tin chung",
    link: "/",
  },
  

]
const NavBars = ({setActive, active, setPrevIndex}) => {
  

  const handleClickNav = (index)=> {
    setPrevIndex(active)
    localStorage.setItem("indexActive", index)
    setActive(localStorage.getItem("indexActive"))
    const timeOut = setTimeout(()=> setPrevIndex(null), 800)
    return () => clearTimeout(timeOut)
  }
  return (
    <div className={styles.navBars}>
      <div className={styles.wrapper}>
        {navs.map((item, index)=> (
          // <Link key={index} href={item.link}>
            <div key={index}  className={clsx(styles.nav, {
              [styles.active] : Number(active) === index
            })}
              onClick={()=> handleClickNav(index)}
            >
              <h5>{index + 1}</h5>
              <div className={clsx(styles.content)}>
                <h4>{item.name}</h4>
              </div>
            </div>
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBars;