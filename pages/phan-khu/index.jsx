// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import styles from "./slider.module.scss";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper";
// import Link from "next/link";

// const img = [
//   {
//     img: "https://aquacity.com.vn/wp-content/uploads/2021/12/Background-trainghiemtour-01-1.jpg",
//   },
//   {
//     img: "https://aquacity.com.vn/wp-content/uploads/2021/04/dao-phuong-hoang-thumbnail.jpg",
//   },
//   {
//     img: "https://aquacity.com.vn/wp-content/uploads/2021/04/the-suite-1.jpg",
//   },
//   {
//     img: "https://aquacity.com.vn/wp-content/uploads/2021/04/the-grand-villas.jpg",
//   },
//   {
//     img: "https://aquacity.com.vn/wp-content/uploads/2021/04/the-stella-thumbnail.png",
//   },
//   {
//     img: "https://aquacity.com.vn/wp-content/uploads/2021/04/the-valencia-river-park-2.jpg",
//   },
// ];
// console.log("dsadas", img);
// export default function Sliders() {
//   return (
//     <div className={styles.sliders}>
//       <div className={styles.slider}>
//         <div className={styles.ar_content}>
//           <Swiper
//             style={{ maxWidth: "960px" }}
//             centeredSlides={true}
//             slidesPerView={1.106}
//             speed={1200}
//             loop={true}
//             navigation={true}
//             spaceBetween={20}
//             modules={[Autoplay, Pagination, Navigation]}
//             className="mySwiper"
//             // breakpoints={{
//             //   600: {
//             //     slidesPerView: 1,
//             //     // navigation: false,
//             //     spaceBetween: 20,
//             //   },
//             //   // "@0.75": {
//             //   //   slidesPerView: 1.2,
//             //   //   spaceBetween: 20,
//             //   // },
//             //   // "@1.00": {
//             //   //   slidesPerView: 3,
//             //   //   spaceBetween: 40,
//             //   // },
//             //   // "@1.50": {
//             //   //   slidesPerView: 4,
//             //   //   spaceBetween: 50,
//             //   // },
//             // }}
//           >
//             {img &&
//               img.map((data, index) => (
//                 <SwiperSlide key={index} className={styles.slide}>
//                   <div className={styles.item}>
//                     <Link href="/">
//                       <img src={data.img} alt="" />
//                     </Link>
//                     <div className={styles.content}>
//                       <div className={styles.desc_box}>
//                         <div className={styles.row_content}>
//                           <div className={styles.col_content}>
//                             <h2>Hành trình tham quan</h2>
//                           </div>
//                           <div className={styles.col_contents}>
//                             <p>điểm đến phồn hoa</p>
//                             <p>Sinh thái giao hoà</p>
//                           </div>
//                         </div>
//                       </div>
//                       <span>khám phá ngay</span>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }
