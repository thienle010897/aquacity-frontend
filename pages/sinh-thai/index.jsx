import clsx from "clsx";
import React from "react";
import styles from "./styles.module.scss";

const contents = [
  {
    title: "~1.000HA",
    desc: "QUY MÔ DỰ ÁN",

  },
  {
    title: "32KM",
    desc: "ĐƯỜNG SÔNG",

  },
  {
    title: "385HA",
    desc: "DIỆN TÍCH",
    descTwo: "MẶT NƯỚC"

  },
  {
    title: "25HA",
    desc: "CÔNG TRÌNH ",
    descTwo: "GIÁO DỤC CÁC CẤP"
  },
  {
    title: "3HA",
    desc: "CÔNG TRÌNH",
    descTwo: "Y TẾ"

  },
  {
    title: "20",
    desc: "CÔNG VIÊN ",
    descTwo: "CHỦ ĐỀ"

  },
  {
    title: "70%",
    desc: "DIỆN TÍCH MẢNG XANH & ",
    descTwo: "TIỆN ÍCH CHUNG"

  },
]

export default function Ecological({active}) {
  return (
    <div className={styles.ecological}>
      <h2>Sinh thái</h2>

      <div className={styles.video}>
        <img src="https://aquacity.com.vn/wp-content/themes/aquacity/resources/assets/index/i_4_1.jpg"/>
        <video autoPlay loop muted playsInline className={styles.ofcv}>
          <source
            src="https://aquacity.com.vn/wp-content/uploads/2021/05/i_4.mp4"
            type="video/mp4"
            width="100%"
          />
        </video>
      </div>
      <div className={styles.contents}>
        {contents.map((item, index)=> (
          <div key={index} className={clsx(styles.content, {
              [styles.edu] : index === 3,
              [styles.last] : index === 6,
              [styles.active] : active === 3
            })}
            style={{
              transition: `all ${(index + 2) / 10 + 1.5}s ease-in-out`
            }}
          >
            <h1>{item.title}</h1>
            <div className={styles.line}></div>
            <h3>{item.desc}</h3>
            {item.descTwo && <h3>{item.descTwo}</h3>}
          </div>
        ))}
      </div>
        <span><h3>Xem thêm</h3></span>
    </div>
  );
}
