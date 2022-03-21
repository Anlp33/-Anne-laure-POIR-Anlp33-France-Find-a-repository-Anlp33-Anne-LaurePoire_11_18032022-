import React from "react"
import "../styles/Footer.css";
import logoFooter from "../assets/LOGO footer.svg"

export default function Footer() {
    return (
      <footer className="footer">
        <img src={logoFooter}alt="logo"></img>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
}