import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Rent from "./pages/Rent";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="location/:cardId" element={<Rent />} />
        <Route path="*" element={<Error />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
