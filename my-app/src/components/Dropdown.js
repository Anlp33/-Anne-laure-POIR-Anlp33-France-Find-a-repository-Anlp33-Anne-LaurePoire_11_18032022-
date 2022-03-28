import React from "react";
import "../styles/dropdown.css";
import { useState } from "react";
import arrowDown from "../assets/arrow_down.svg"
import arrowUp from "../assets/arrow_up.svg";


export default function Dropdown(props) {
  const [isOpened, setIsOpened] = useState(false);

    function toggleDropdown() {
      setIsOpened(prevStatus => !prevStatus)
    }
  const arrow = isOpened ? arrowUp : arrowDown;
  const dropdownDisplay = isOpened ? "show": "hide"
  

  return (
    <div className="dropdown">
      <div className="dropdown-title">
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
