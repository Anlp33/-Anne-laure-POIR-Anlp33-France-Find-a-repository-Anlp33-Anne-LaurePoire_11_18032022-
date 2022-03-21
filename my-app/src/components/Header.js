import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Kaza" className="logo" />
      <nav className="Navbar">
        <ul>
          <li>
            <NavLink
              className={(activeLink) => (activeLink.isActive ? "active" : "")}
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(activeLink) => (activeLink.isActive ? "active" : "")}
              to="about"
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
