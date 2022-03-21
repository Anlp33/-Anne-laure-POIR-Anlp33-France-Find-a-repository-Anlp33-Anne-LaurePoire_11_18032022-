import React from "react";
import banner from "../assets/banner.png";

export default function Banner() {
  return (
    <div id="banner">
      <img src={banner} alt="banner" className="banner" />
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
}
