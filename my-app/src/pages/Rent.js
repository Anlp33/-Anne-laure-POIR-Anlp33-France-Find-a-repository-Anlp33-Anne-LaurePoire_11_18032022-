import React from "react";
import Gallery from "../components/Gallery";
import Dropdown from "../components/Dropdown";
import "../styles/dropdown.css";
import { useEffect, useState } from "react";
import Info from "../components/Info";
import { useParams } from "react-router-dom";

export default function Rent() {
  const { cardId } = useParams();
  console.log(cardId);

  const [dataRent, setData] = useState([]);

  React.useEffect(function () {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  //Récupérer id dans URL
  //faire apparaitre les photos Carrousel
  //créer carrousel avec flêche (si tab length est de 1 on enlève les fleches)
  //séparer les tags et la liste équipements
  //récupérer le nombre d'étoiles et afficher en fonction

  const RentData = dataRent.map((data) => {
    // const tagArray = data.tags.map((tag) => `<li>${tag}</li>`);
    // console.log(tagArray);
    return (
      <div>
        <Gallery pictures={data.pictures} />
        <Info key={data.id} {...data} />
        <div className="dropdown-Rent">
          <div className="dropdown box">
            <Dropdown title="Description" text={data.description} />
          </div>
          <div className="dropdown box">
            <Dropdown title="Equipements" text={data.equipments} />
          </div>
        </div>
      </div>
    );
  });

  return <div>{RentData}</div>;
}
