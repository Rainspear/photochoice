import React from "react";
import classes from "./BookingDate.module.scss";

const bookingDate = () => {
    var nowDate = new Date();
    var nowDateIso = nowDate.toISOString().split('T')[0];
  return (
    <div className={classes.BookingDate}>
      <form className={classes.Filter}>
        <div>
            <label>Chọn ngày chụp</label>
            <input type="date" id="start" name="start" min={nowDateIso}  defaultValue={nowDateIso} />
        </div>
        <div>
            <label>Theo giá</label>
            <select>
                <option>Tăng dần</option>
                <option>Giảm dần</option>
            </select>
        </div>
        <div>
            <label>Theo sao</label>
            <select>
                <option>Tăng dần</option>
                <option>Giảm dần</option>
            </select>
        </div>
      </form>
    </div>
  );
};

export default bookingDate;
