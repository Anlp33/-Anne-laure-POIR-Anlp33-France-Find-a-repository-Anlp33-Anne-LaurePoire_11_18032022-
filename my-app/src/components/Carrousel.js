import React from "react";
import arrowForward from "../assets/arrow_forward.svg";
import arrowBack from "../assets/arrow_back.svg";
import "../styles/carrousel.css";

export default function Carrousel(props) {
  return (
    <div className="carrousel">
      <img src={arrowBack} alt="arrow back" className="arrow--back"></img>
      <img src={[props.cover]} alt="pictures" className="carrousel--picture"></img>
      <img src={arrowForward} alt="arrow forward" className="arrow--forward"></img>
    </div>
  );
}
