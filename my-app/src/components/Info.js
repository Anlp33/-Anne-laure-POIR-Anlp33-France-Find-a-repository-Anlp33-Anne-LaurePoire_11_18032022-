
import React from "react";
import starFilled from "../assets/star_filled.svg";
import starEmpty from "../assets/star_empty.svg"
import "../styles/info.css";

export default function Info(props) {
return (
  <div className="rent-info">
    <div className="rent-info-leftCorner">
      <h2>{props.title}</h2>
      <p>{props.location}</p>
      <ul className="tags">
        <li>{props.tags}</li>
      </ul>
    </div>
    <div className="rent-info-rightCorner">
      <div className="host">
        <h2>{props.host.name}</h2>
        <img src={props.host.picture} alt="host profile" />
      </div>
      <div className="rate" rating={props.rating}>
        <img src={starFilled} alt="star" className="star-filled" />
        <img src={starFilled} alt="star" className="star-filled" />
        <img src={starFilled} alt="star" className="star-filled" />
        <img src={starEmpty} alt="star" className="star-empty" />
        <img src={starEmpty} alt="star" className="star-empty" />
      </div>
    </div>
  </div>
);
}
 