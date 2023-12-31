import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

const Header = () => {
  return (
    <header>
      <Link to={"/"} className="logo">
        FoodLab
      </Link>

      <a
        href="https://github.com/adnan059/CMBD-Final-Exam"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github"></i> Source Code
      </a>
    </header>
  );
};

export default Header;
