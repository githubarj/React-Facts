import React from "react";
import logo from "../images/react-logo.png";
import "../index.css"

export default function Navbar() {
  return (
    <nav className="top">
      <div className="logo">
        <img src={logo} alt="react logo" className="react-icon" />
        <h2>ReactFacts</h2>
      </div>
      <h3>React Course - Project 1</h3>
    </nav>
  );
}
