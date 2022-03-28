import React from "react";
import Gallery from "../components/Gallery";
import Dropdown from "../components/Dropdown";
import "../styles/dropdown.css";
import "../styles/rent.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  //faire apparaitre les photos Carrousel
  //créer carrousel avec flêche (si tab length est de 1 on enlève les fleches)
  //dropdown liste équipements
  //récupérer le nombre d'étoiles et afficher en fonction
  //corriger CSS page d'accueil et zoom dans about

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
            {dataRent && <h2>{dataRent.host.name}</h2>}
            {dataRent && <img src={dataRent.host.picture} alt="host profile" />}
          </div>
        </div>
      </div>
      <div className="dropdown-Rent">
        <div className="dropdown box">
          {dataRent && (
            <Dropdown title="Description" text={dataRent.description} />
          )}
        </div>
        <div className="dropdown box">
          {dataRent && (
            <Dropdown title="Equipements" text={dataRent.equipments} />
          )}
        </div>
      </div>
    </div>
  );
}
