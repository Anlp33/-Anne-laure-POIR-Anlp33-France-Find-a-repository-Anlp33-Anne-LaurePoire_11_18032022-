import React from "react";
import Carrousel from "../components/Carrousel";
import Dropdown from "../components/Dropdown";
import "../styles/dropdown.css";
import { useEffect, useState } from "react";
import Info from "../components/Info";

export default function Rent() {
  //comment récupérer les données mockées?

  // const RentData = data.map((data) => {
  //   console.log(data.id);
  //   return <Carrousel cover={data.cover} id={data.id} key={data.id} />;
  // });

  return (
    <div>
      <Carrousel />
      <Info />
      <div className="dropdown-Rent">
        <Dropdown />
        <Dropdown />
      </div>
    </div>
  );
}
//1- Récupérer l'id sur lequel j'ai cliqué pour afficher l'objet en question
//2 - créer le carrousel
//3 - créer les tags
//4 - créer les étoiles
//5 - affichage liste ou texte dans les dropdown
