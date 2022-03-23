import React from "react";
import bannerAbout from "../assets/banner-About.png";
import Dropdown from "../components/Dropdown";
import { useState } from "react";


export default function About() {
//faire un tableau avec ce que je vais mettre dans titre et carte
  
   const aboutArray = [
     {
       title: "Fiabilité",
       text: "Notre Plateforme ne montre que les Hébergements qui entretiennent une relation commerciale avec nous, et elle ne montre pas nécessairement tous leurs produits ou services.",
     },
     {
       title: "Respect",
       text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
     },
     {
       title: "Service",
       text: "Quelles que soient votre destination et vos envies, Kasa facilite vos séjours et vous garantit une assistance 24h/24 et 7j/7.",
     },
     {
       title: "Responsabilité",
       text: "Nous prenons des mesures raisonnables pour mettre à disposition notre Plateforme, mais nous ne pouvons garantir que toutes les informations qu’elle contient sont exactes (nous obtenons des informations des Prestataires de services). Dans la mesure permise par la loi, nous ne pouvons être tenus responsables des erreurs, des interruptions ou des informations manquantes - bien que nous fassions tout notre possible pour les corriger/réparer dès que possible.",
     },
   ];

  const aboutElements = aboutArray.map(element => {
    return (
      <Dropdown title={element.title} text={element.text} />
  )})


  return (
    <div>
      
      <img src={bannerAbout} alt="banner" className="banner"></img>
  
       {aboutElements}
      
    </div>
  );
}
