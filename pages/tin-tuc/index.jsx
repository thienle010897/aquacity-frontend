import { Button, Grid } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.scss";

const list = [
  {
    image:
      "https://aquacity.com.vn/wp-content/uploads/2022/03/img_2691_241621160.jpeg?%3E",
    title:
      "Sân bay, cao tốc tỉ USD tăng sức nóng bất động sản phía Đông TP.HCM",
  },
  {
    image:
      "https://aquacity.com.vn/wp-content/uploads/2022/03/TTAN-Aqua-Copy.jpg?%3E",
    title: "Sân bay, cao tốc tỉ USD tăng sức nóng bất động sản phía Đông Lào",
  },
  {
    image: "https://aquacity.com.vn/wp-content/uploads/2022/03/1.jpg?%3E",
    title: "Sân bay, cao tốc tỉ USD tăng sức nóng bất động sản phía Đông Timo",
  },
];
export default function News({ active }) {
  return (
    <div className={styles.news}>
      <div className={styles.bg}>
        <img src="https://aquacity.com.vn/wp-content/themes/aquacity/resources/assets/index/i_8.jpg" />
      </div>
      <Grid container spacing={1} className={clsx(styles.contents, {
        [styles.active] : active === 7
      })}>
        <Grid container item xs={1} sm={1} md={2}></Grid>
        <Grid container spacing={1} item xs={12} sm={12} md={8}>
          <Grid item xs={12} sm={12} md={12} className={styles.contentsTitle}>
            <h1>TIN TỨC NỔI BẬT</h1>
          </Grid>
          <Grid container item xs={12} sm={12} md={12} className={styles.contentsList}>
            {list.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={12}
                md={4}
                className={styles.content}
              >
                <div className={styles.image}>
                  <img src={item.image} />
                </div>
                <h5>{item.title}</h5>
                <button>Xem thêm</button>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={12} className={styles.buttonAll}>
            <button>Xem thêm</button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
