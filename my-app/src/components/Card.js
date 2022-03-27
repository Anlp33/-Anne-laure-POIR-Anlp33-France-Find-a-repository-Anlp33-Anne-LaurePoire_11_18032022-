import React from "react";
import "../styles/card.css";
import { useParams } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card" id={props.id}>
      
      <img src={props.cover} className="card-img" alt="location" />
      <h2 className="card-title">{props.title}</h2>
    </div>
  );
}
