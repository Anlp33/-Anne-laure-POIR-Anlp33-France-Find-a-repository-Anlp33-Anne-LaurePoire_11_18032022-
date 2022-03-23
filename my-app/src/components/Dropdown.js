import React from "react";
import "../styles/dropdown.css";
import { useState } from "react";
import arrowDown from "../assets/arrow_down.svg"
import arrowUp from "../assets/arrow-up.svg";


export default function Dropdown(props) {
    const [isOpened, setIsOpened] = useState(false);

    function toggleDropdown() {
      setIsOpened(prevStatus => !prevStatus)
    }
  const arrow = isOpened ? `${arrowDown}` : `${arrowUp}`;
  const dropdownDisplay = isOpened ? "show": "hide"
  
  console.log(isOpened)

  return (
    <div className="dropdown">
      <div className="dropdown--title">
        <h2>{props.title}</h2>
        <img
          src={arrow}
          alt="arrow"
          onClick={toggleDropdown}
        />
      </div>
      <p className={dropdownDisplay}>{props.text}</p>
    </div>
  );
}
