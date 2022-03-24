import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/card.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Home() {
  //créer useeffect avec fetch, utiliser useState pour récupérer données
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

 
    const HomeData = data.map((data) => {console.log(data.id);
      return <Card title={data.title} cover={data.cover} id={data.id} key={data.id}/>;
    }
    );
 

  return (
    <div>
      <Banner />
      <div className="card-container">
        <Link to="location/" path={data.id}>
          {HomeData}
        </Link>
        {/* <Faire un map sur données reçues et dans usestate Card cover="" title="Title", ajouter l'id /> */}
      </div>
    </div>
  );
}
