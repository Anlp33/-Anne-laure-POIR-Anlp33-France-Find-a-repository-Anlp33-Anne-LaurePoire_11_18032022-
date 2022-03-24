
import React from "react";
import star from "../assets/star_filled.svg";
import "../styles/info.css";

export default function Info(props) {
return (
  <div className="rent--info">
    <div className="rent--info--leftCorner">
      <h2>{props.title}</h2>
      <p>{props.location}</p>
      <ul className="tags">
        <li>{props.tags}</li>
      </ul>
    </div>
    <div className="rent--info--rightCorner">
      <div className="host">
        <h2>{props.name}</h2>
        <img src={props.picture} alt="host profile" />
      </div>
      <div className="rate" rating={props.rating}>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
    </div>
  </div>
);
}
 