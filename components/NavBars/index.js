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

  // {
  //   name: "Phân khu",
  //   link: "/",
  // },
  // {
  //   name: "Thư viện",
  //   link: "/",
  // },
  // {
  //   name: "Tin tức",
  //   link: "/",
  // },
  // {
  //   name: "Liên hệ",
  //   link: "/",
  // },
  // {
  //   name: "Thông tin chung",
  //   link: "/",
  // },
  

]
const NavBars = ({setActive, active}) => {
  // const [active, setActive] = useState(0);
  useEffect(()=> {
    localStorage.setItem("indexActive", 0)
  }, [])

  const handleClickNav = (index)=> {
    localStorage.setItem("indexActive", index)
    setActive(localStorage.getItem("indexActive"))
  }
  return (
    <div className={styles.navBars}>
      <div className={styles.wrapper}>
        {navs.map((item, index)=> (
          <Link key={index} href={item.link}>
            <div  className={clsx(styles.nav, {
              [styles.active] : Number(active) === index
            })}
              onClick={()=> handleClickNav(index)}
            >
              <h5>{index + 1}</h5>
              <div className={clsx(styles.content)}>
                <h4>{item.name}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBars;