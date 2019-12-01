import React from "react";
import classes from "./Footer.module.scss";

const footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.FooterMiddle}>
        <div className={classes.Dark}>

        </div>
        <div className={classes.Info}>
          <p style={{color: "#fc4153", fontSize : "40px", letterSpacing : "1.4px", fontWeight : "600"}}>Photochoice</p>
          <p>Ktx Đại học quốc gia thành phố HCM</p>
          <p>Đại diện : Team photochoice</p>
          <p>Hotline : 0331234567</p>
          <p>Địa chỉ : Khu phố 6, phường Linh Trung, Quận Thủ Đức</p>

        </div>
      </div>
      <div className={classes.FooterBottom}>
          <ul className={classes.Sponsor}>
            <li><a href="/"><img src="https://photobooking.vn/images/f1.png"  alt="1"/></a></li>
            <li><a href="/"><img src="https://photobooking.vn/images/f2.png"  alt="2"/></a></li>
            <li><a href="/"><img src="https://photobooking.vn/images/f3.png"  alt="3"/></a></li>
          </ul>
          <ul className={classes.Policy}>
            <li><a href="/">Quy chế hoạt động</a></li>
            <li><a href="/">Chính sách bảo mật</a></li>
            <li><a href="/">Cơ chế giải quyết tranh chấp</a></li>
          </ul>
          <p>@2019 Photochoice | Photobooking | Design by Eraweb</p>
          <div></div>
      </div>
    </div>
  );
};

export default footer;
