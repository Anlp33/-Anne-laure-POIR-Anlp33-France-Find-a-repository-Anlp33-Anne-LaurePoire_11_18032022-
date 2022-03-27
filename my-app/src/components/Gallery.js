import React from "react";
import arrowForward from "../assets/arrow_forward.svg";
import arrowBack from "../assets/arrow_back.svg";
import "../styles/gallery.css";

export default function Carrousel(props) {
  return (
    <div className="gallery">
      <img src={arrowBack} alt="arrow back" className="arrow-back"></img>
      <img src={props.pictures} alt="pictures" className="gallery-picture"></img>
      <img src={arrowForward} alt="arrow forward" className="arrow-forward"></img>
    </div>
  );
}
