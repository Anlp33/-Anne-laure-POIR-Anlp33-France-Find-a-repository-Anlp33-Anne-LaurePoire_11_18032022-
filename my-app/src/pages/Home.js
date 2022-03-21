import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { useState, useEffect } from "react";


export default function Home() {
  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  
    useEffect(() => {
        fetch("../public/dataArray.js").then((response) =>
          response
            .json()
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
        );
    }, [])

  //créer useeffect avec fetch, utiliser useState pour récupérer données
  return (
    <div>
      <Banner />
      <div className="card-container">
        <Card />
        {/* <Card cover="" title="Title" />
        <Faire un map sur données reçues et dans usestate Card cover="" title="Title", ajouter l'id />
        <Card cover="" title="Title" />
        <Card cover="" title="Title" />
        <Card cover="" title="Title" />
        <Card cover="" title="Title" /> */}
      </div>
    </div>
  );
}
