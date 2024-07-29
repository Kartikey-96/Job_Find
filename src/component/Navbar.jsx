import React from "react";
import "../Style/Navbar.css";
import logo from "../Assist/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="">
          <li>Home</li>
          <li>Result</li>
          <li>ADMIT CARD</li>
          <li>LATEST JOB</li>
          <li>ADMISSOIN</li>
          <li>SYLLABUS</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
