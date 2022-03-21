import React from "react";
import Header from "./components/Header"
// import Banner from "./components/Banner";
// import Card from "./components/Card";
import Footer from "./components/Footer";
import About from "./pages/About.js"
import Home from "./pages/Home"
import Error from "./pages/Error";
import Rent from "./pages/Rent";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      {/* <Banner /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="location" element={<Rent />} />
        {/* <Route path="erreur" element={<Error />} /> */}
        <Route path="about" element={<About />} />      
      </Routes>
      <Footer />
    </div>
  );
}



export default App;


