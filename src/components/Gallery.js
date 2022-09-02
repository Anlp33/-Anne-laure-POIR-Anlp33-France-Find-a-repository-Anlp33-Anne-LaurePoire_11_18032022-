import React from "react";
import arrowForward from "../assets/arrow_forward.svg";
import arrowBack from "../assets/arrow_back.svg";
import "../styles/gallery.css";
import { useState } from "react";

export default function Gallery(props) {
  const [count, setCount] = useState(0);

  if (count === props.pictures.length) {
    setCount(0);
  }
  if (count === -1) {
    setCount((prevCount) => prevCount + props.pictures.length);
  }

  const displayArrow = {
    display: props.pictures.length === 1 ? "none" : "block",
  };

  function previousPicture() {
    setCount((prevCount) => prevCount - 1);
  }

  function nextPicture() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="gallery">
      <img
        src={arrowBack}
        alt="arrow back"
        style={displayArrow}
        className="arrow-back"
        onClick={previousPicture}
      ></img>
      <img
        src={props.pictures[count]}
        alt="pictures"
        className="gallery-picture"
      ></img>
      <div className="page-number">
        {count + 1}/{props.pictures.length}
      </div>
      <img
        src={arrowForward}
        alt="arrow forward"
        style={displayArrow}
        className="arrow-forward"
        onClick={nextPicture}
      ></img>
    </div>
  );
}
