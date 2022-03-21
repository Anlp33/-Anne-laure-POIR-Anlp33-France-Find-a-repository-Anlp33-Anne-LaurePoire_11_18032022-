import React from "react";
import "../styles/Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.cover} className="card--img" alt="location" />
      <h2 className="card--title">{props.title}</h2>
    </div>
  );
}
