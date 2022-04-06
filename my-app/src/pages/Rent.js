import React from "react";
import Gallery from "../components/Gallery";
import Rating from "../components/Rating";
import Dropdown from "../components/Dropdown";
import Error from "./Error";
import "../styles/dropdown.css";
import "../styles/rent.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Rent() {
  const params = useParams();

  const [dataRent, setData] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // const flat = data.find((location) => location.id === params.cardId);
        setData(data.find((location) => location.id === params.cardId));
        // console.log(dataRent.host.picture);
      });
  }, [params.cardId]);

  //faire un return qui utilise l'option nav to page erreur si dataRent n'existe pas

  if (dataRent === undefined) {
    return <NavLink to="*"></NavLink>;
  }

  //if dataRent === undefined, return page erreur
  return (
    <div>
      {dataRent && <Gallery pictures={dataRent.pictures} />}
      <div className="rent-info">
        <div className="rent-info-leftCorner">
          {dataRent && <h2>{dataRent.title}</h2>}
          {dataRent && <p>{dataRent.location}</p>}
          {dataRent && (
            <ul className="tags">
              {dataRent.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="rent-info-rightCorner">
          <div className="host">
            <div className="host-details">
              {dataRent && <h2>{dataRent.host.name}</h2>}

              {dataRent && (
                <img src={dataRent.host.picture} alt="host profile" />
              )}
            </div>
            {dataRent && <Rating rating={dataRent.rating} />}
          </div>
        </div>
      </div>
      <div className="dropdown-Rent">
        <div id="dropdownRent-title">
          {dataRent && (
            <Dropdown title="Description" text={dataRent.description} />
          )}
        </div>
        <div id="dropdownRent-text">
          {dataRent && (
            <Dropdown
              title="Equipements"
              text={dataRent.equipments.map((equipment, index) => (
                <li key={`${equipment}-${index}`}>{equipment}</li>
              ))}
            />
          )}{" "}
        </div>
      </div>
    </div>
  );
}
