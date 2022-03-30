import React from "react";
import starFilled from "../assets/star_filled.svg";
import starEmpty from "../assets/star_empty.svg";

export default function Rating(props) {
  let starArray = [];

  for (let i = 0; i < 5; i++) {
    if (i < props.rating) {
      starArray.push(starFilled);
    } else {
      starArray.push(starEmpty);
    }
  }

  return (
    <div className="rate" rating={props.rating}>
      {starArray.map((star, index) => (
        <img
          src={star}
          alt="star"
          className="star"
          key={`${star}-${index}`}
        ></img>
      ))}
    </div>
  );
}

