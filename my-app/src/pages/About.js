import React from "react";
import bannerAbout from "../assets/banner-About.png";
import Dropdown from "../components/Dropdown";

export default function About() {
  const aboutArray = [
    {
      title: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
      id: 1,
    },
    {
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      id: 2,
    },
    {
      title: "Service",
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      id: 3,
    },
    {
      title: "Responsabilité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      id: 4,
    },
  ];

  const aboutElements = aboutArray.map((element) => {
    return (
      <div className="dropdownAbout" key={element.id}>
        <Dropdown title={element.title} text={element.text} />
      </div>
    );
  });

  return (
    <div>
      <img src={bannerAbout} alt="banner" className="bannerAbout"></img>
      {aboutElements}
    </div>
  );
}
