import { Grid } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.scss";

export default function Register() {
  return (
      <div className={styles.register}>
        <div className={styles.bg}>
          <img src="https://aquacity.com.vn/wp-content/themes/aquacity/resources/assets/index/i_9.jpg" alt="" />
        </div>

        <Grid container spacing={1} className={styles.contents}>
        <Grid container item xs={2} sm={2} md={3}></Grid>
        <Grid container spacing={1} item xs={8} sm={8} md={6}>
          <Grid item xs={12} sm={12} md={12} className={styles.contentsTitle}>
            <h1>ĐĂNG KÝ NHẬN THÔNG TIN DỰ ÁN</h1>
            <img src="https://aquacity.com.vn/wp-content/themes/aquacity/resources/assets/tagline.png"/>
            <h5>Quý khách vui lòng để lại thông tin, chúng tôi sẽ liên hệ ngay</h5>
          </Grid>
          <Grid container spacing={1} item xs={12} sm={12} md={12} className={styles.form}>
            <Grid  item xs={12} sm={6} md={6} className={styles.item}>
              <input 
                value="Họ và tên (*)"
              />
            </Grid>
            <Grid  item xs={12} sm={6} md={6} className={styles.item}>
            <input value="Điện thoại (*)"/>
            
            </Grid>
            <Grid  item xs={12} sm={6} md={6} className={styles.item}>
            <input value="Email (*)"/>
            
            </Grid>
            <Grid  item xs={12} sm={6} md={6} className={styles.item}>
            <input value="Địa chỉ"/>
            
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
