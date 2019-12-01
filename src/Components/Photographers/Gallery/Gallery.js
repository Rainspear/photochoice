import React from "react";
import classes from "./Gallery.module.scss";

const gallery = props => {
  let pictures = [];
  if (props.photographer.gallery.length > 0)
    pictures = props.photographer.gallery.map(photo => (
      <img src={photo} alt="123" />
    ));
  else pictures = "Không có ảnh nào trong bộ sưu tập";
  return (
    <div className={classes.Gallery}>
      <h3>Bộ Sưu tập của {props.photographer.name}</h3>
      {pictures}
    </div>
  );
};

export default gallery;
