import React from "react";
import classes from "./Characteristic.module.scss";

const characteristic = () => {
  return (
    <div className={classes.Characteristic}>
      <p className={classes.Chrt0}>
        Đội ngũ nhiếp ảnh gia có kỹ thuật cao cùng thiết bị chụp ảnh cao cấp,
        đáp ứng mọi yêu cầu của bạn.
      </p>
      <p className={classes.Chrt1}>
        Chúng tôi lựa chọn những nhiếp ảnh gia có trình độ cao, tất cả các phản
        hồi của bạn sẽ được lưu lại để đội ngũ chúng tôi liên tục hoàn thiện bản
        thân.
      </p>
    </div>
  );
};

export default characteristic;
