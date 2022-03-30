import { Grid } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.scss";

export default function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.bg}>
        <img
          src="https://aquacity.com.vn/wp-content/themes/aquacity/resources/assets/index/i_9.jpg"
          alt=""
        />
      </div>

      <Grid container spacing={1} className={styles.contents}>
        <Grid container item xs={1} sm={1} md={3} className={styles.gridFake}></Grid>
        <Grid container spacing={0} item xs={12} sm={10} md={6}>
          <Grid item xs={12} sm={12} md={12} className={styles.contentsTitle}>
            <h1>ĐĂNG KÝ NHẬN THÔNG TIN DỰ ÁN</h1>
            <img src="https://aquacity.com.vn/wp-content/themes/aquacity/resources/assets/tagline.png" />
            <h5>
              Quý khách vui lòng để lại thông tin, chúng tôi sẽ liên hệ ngay
            </h5>
          </Grid>
          <Grid
            container
            spacing={0}
            item
            xs={12}
            sm={12}
            md={12}
            className={styles.form}
          >
            <Grid item xs={12} sm={12} md={6} className={styles.item}>
              <input defaultValue="Họ và tên (*)" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={styles.item}>
              <input defaultValue="Điện thoại (*)" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={styles.item}>
              <input defaultValue="Email (*)" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={styles.item}>
              <input defaultValue="Địa chỉ" />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} className={styles.buttonAll}>
            <button>Đăng ký ngay</button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
