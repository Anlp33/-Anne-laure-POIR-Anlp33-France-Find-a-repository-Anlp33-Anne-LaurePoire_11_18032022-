import React from "react";
import starFilled from "../assets/star_filled.svg";
import starEmpty from "../assets/star_empty.svg";

export default function Rating(props) {
  return (
        <div className="rate" rating={props.rating}>
          <img src={starFilled} alt="star" className="star-filled" />
          <img src={starFilled} alt="star" className="star-filled" />
          <img src={starFilled} alt="star" className="star-filled" />
          <img src={starEmpty} alt="star" className="star-empty" />
          <img src={starEmpty} alt="star" className="star-empty" />
        </div>
  );
}
