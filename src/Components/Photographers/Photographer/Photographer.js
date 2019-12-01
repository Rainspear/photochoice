import React from "react";
import classes from "./Photographer.module.scss";

const photographer = props => {
  console.log(props);
  return (
    <div className={classes.Photographer}>
      <div className={classes.TopSection}>
        <div className={classes.LeftTopBlock}>
          <img src={props.photographer.image} alt="name" />
        </div>
        <div className={classes.RightTopBlock}>
          <h3>{props.photographer.name}</h3>
          <p>
            {props.photographer.rate < 0 ? "Chưa có đánh giá về nhiếp ảnh này": props.photographer.rate + " sao"}
          </p>
          <p>{props.photographer.address}</p>
          <div>
            <a href="/">Đặt lịch</a>
            <span>Báo cáo xấu</span>
          </div>
        </div>
      </div>
      <div className={classes.BottomSection}>
        <p>Bảng giá tham khảo</p>
        <div className={classes.PriceBlock}>
          <table>
            <thead>
              <tr>
                <th>Số người</th>
                {
                  props.photographer.priceObject.map(priceObject =>  <th>{priceObject.people}</th>)
                }
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Giá</td>
                {
                  props.photographer.priceObject.map(priceObject =>  <td>{priceObject.price + "đ"}</td>)
                }
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default photographer;
