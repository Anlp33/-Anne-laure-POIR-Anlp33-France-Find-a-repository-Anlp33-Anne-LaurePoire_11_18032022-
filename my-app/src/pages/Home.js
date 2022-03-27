import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "../styles/card.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);

    React.useEffect(function () {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);


  const HomeData = data.map((data) => {
    return (
      <Link to={`location/${data.id}`}>
        <Card
          key={data.id}
          {...data}
        />
      </Link>
    );
  });
  //connait pas data.id en dehors du .map

  return (
    <div>
      <Banner />
      <div className="card-container">{HomeData}   </div>
    </div>
  );
}
