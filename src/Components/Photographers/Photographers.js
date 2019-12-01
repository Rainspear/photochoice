import React from "react";
import classes from "./Photographers.module.scss";
import Photographer from "./Photographer/Photographer";
import PropTypes from "prop-types";
import Gallery from "./Gallery/Gallery";
import Auxiliary from "../../Hocs/Auxiliary";

const photographers = props => {
  return (
    <div className={classes.Photographers}>
      {props.photographers.map(photographer => {
        return (
          <Auxiliary>
            <Photographer
              key={photographer.id}
              photographer={photographer}
            ></Photographer>
            <Gallery
              key={photographer.id}
              photographer={photographer}
            ></Gallery>
          </Auxiliary>
        );
      })}
    </div>
  );
};

const propTypes = {
  photographers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      description: PropTypes.string,
      priceObject: PropTypes.array.isRequired
      // inventory : PropTypes.number.isRequired,
    })
  ).isRequired // product nhan vao phai la array .isRequied la yeu cau phai co
  // onChangeMessage : PropTypes.func,
  // onAddToCart : PropTypes.func
};

photographers.propTypes = propTypes;

export default photographers;
