import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { useState, useEffect } from "react";


export default function Home() {

  const [data, setData] = useState([]);
  console.log(data)

 const getData = () => {
   fetch("data.json")
     .then(function (response) {
       console.log(response);
       return response.json();
     })
     .then(function (myJson) {
       console.log(myJson);
       setData(myJson);
     });
 };
 useEffect(() => {
   getData();
 }, []);

  //créer useeffect avec fetch, utiliser useState pour récupérer données
  return (
    <div>
      <Banner />
      <div className="card-container">
        <Card title={data.title}/>
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
