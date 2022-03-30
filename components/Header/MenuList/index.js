import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from "./styles.module.scss";
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import Link from 'next/link'

const MenuList = ({isMemu, isActive, setIsActive}) => {
  // const [isActive, setIsActive] = useState(false)
  const list = [
    {
      title: "Trang chủ", 
      link: "/",
    },
    {
      title: "Sa bàn 360", 
      link: "/",
    },
    {
      title: "Thư viện", 
      link: "/",
    },
    {
      title: "Tin tức", 
      link: "/",
    },
    {
      title: "Toàn cảnh dự án", 
      link: "/",
    },
    
  ]
  const languages = [
    {
      key: "USA",
      img: "https://anbvietnam.vn/wp-content/uploads/2021/01/co-my-co-bao-nhieu-mau3.jpg"
    },
    {
      key: "JP",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/225px-Flag_of_Japan.svg.png"
    },
    {
      key: "KOR",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png"
    },
    {
      key: "CHI",
      img: "https://sc04.alicdn.com/kf/HTB1jWJ3jvBNTKJjSszbq6yFrFXak.jpg"
    },
  ]
  useEffect(()=> {
    if(isMemu){
      const timeOut = setTimeout(()=> {
        setIsActive(true)
      }, 1200)
      return ()=> clearTimeout(timeOut)
    } else {
      setIsActive(false)
    }
  }, [isMemu])
  return (
    <div className={styles.menuList}>
    <div className={styles.wrapper}>
      
      {list.map((item, index)=> (
        <div key={index} className={clsx(styles.link, {
          [styles.active] : isActive === true
        })}
          style={{
            // transform: `translateY(-${index + 3}00px)`
            // transition: `all ${(index + 7) / 10}s ease-in-out`
          }}
        >
            <Link href={item.link}>
              <h2>{item.title}</h2>
            </Link>
        </div>
      ))}
      {languages.map((item, index)=> (
        <div key={item.key} className={clsx(styles.languages, {
          [styles.active] : isActive === true
        })}
        style={{
          // transition: `all ${(index + 2) / 10}s ease-in-out`
        }}
        >
          <img src={item.img}/>
        </div>
      ))}
      
    </div>
      
    </div>
  );
};
 
export default MenuList;
