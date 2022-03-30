import { Grid } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.scss";

const list = [
  {
    title: "Đường dạo ven sông",
  },
  {
    title: "Bến du thuyền",
  },
  {
    title: "Công viên xanh",
  },
  {
    title: "Vườn ươm cây",
  },
  {
    title: "Bến du thuyền Kayak",
  },
  {
    title: "Đường dạo ven sông",
  },
  {
    title: "Bến du thuyền",
  },
  {
    title: "Công viên xanh",
  },
  {
    title: "Vườn ươm cây",
  },
  {
    title: "Bến du thuyền Kayak",
  },
  {
    title: "Đường dạo ven sông",
  },
  {
    title: "Bến du thuyền",
  },
  {
    title: "Công viên xanh",
  },
  {
    title: "Vườn ươm cây",
  },
];
export default function Utilities() {
  return (
    <div className={styles.utilities}>
      <div className={styles.image}>
        <img src="https://aquacity.com.vn/wp-content/uploads/2021/05/phoenix-resize-rgb.jpg" />
      </div>
      <Grid container  className={styles.utilitiesAqua}>
        <Grid className={styles.utilitiesList}
          item sm={12} xs={12} md={4}
          container spacing={1}
        >
          <Grid item sm={12} xs={12} md={12} className={styles.utilitiesListTitle}>
            <h2>TIỆN ÍCH AQUACITY</h2>
          </Grid>
          <Grid item sm={6} xs={6} md={6}>
            {list.slice(0, 7).map((item, index)=> (
              <h5 key={index}>{`${index + 1}. ${item.title}`}</h5>
            ))}
          </Grid>
          <Grid item sm={6} xs={6} md={6}>
            {list.slice(7).map((item, index)=> (
              <h5 key={index}>{`${index + 8}. ${item.title}`}</h5>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
