import { Container, Grid } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.scss";

export default function Infor() {
  return (
    <div className={styles.infor}>
      <div className={styles.bg}>
        <img src="https://aquacity.com.vn/wp-content/themes/aquacity/resources/assets/index/i_9.jpg" />
      </div>
        <Grid container spacing={1} className={clsx(styles.contents)}>
          <Grid container item xs={12} sm={12} md={4} className={styles.novalandImage}>
              <img src="https://aquacity.com.vn/wp-content/themes/aquacity/resources/assets/logo_novaland.png" />
          </Grid>
          <Grid container  item xs={12} sm={12} md={4} className={styles.between}>
            <h2>ĐỊA CHỈ DỰ ÁN</h2>
            <h1>Tp. Biên Hòa, Đồng Nai</h1>
            <h2>HOTLINE</h2>
            <h4>TP. Hồ Chí Minh</h4>
            <h1>0943 79 79 79</h1>
          </Grid>
          <Grid container  item xs={12} sm={12} md={4} className={styles.right}>
            <h2>SÀN GIAO DỊCH DỰ ÁN</h2>
            <h3>NOVALAND GALLERY</h3>
            <h2>2Bis Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1, TP.HCM</h2>
            <h3>TRUNG TÂM GIAO DỊCH BẤT ĐỘNG SẢN TẠI AQUA CITY</h3>
            <h2>BIÊN HÒA, ĐỒNG NAI</h2>

          </Grid>
          <Grid container  item xs={12} sm={12} md={12} className={styles.footer}>
          <ul>
              <li>Chính sách bảo mật</li>
              <li>Điều kiện giao dịch chung</li>
              <li>Vận chuyển và giao nhận</li>
              <li>Phương thức thanh toán</li>
            </ul>
            <h3>CÔNG TY TNHH THÀNH PHỐ AQUA</h3>
            <p>Tòa nhà Donacoop, Khu Phước Hải, Thị trấn Long Thành, Huyện Long Thành, Tỉnh Đồng Nai, Việt Nam.</p>
            <p>Giấy chứng nhận đăng ký doanh nghiệp số 3600991416 do Sở Kế hoạch và Đầu tư TP.HCM cấp lần đầu ngày 22/04/2008</p>
            <p>Số điện thoại: 0251 350 1508</p>
            <div>
              <img src="https://www.novaland.com.vn/Data/Sites/1/media/Default/logosalenoti-(1).png"/>
            </div>
          </Grid>
        </Grid>
    </div>
  );
}
