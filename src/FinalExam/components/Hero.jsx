import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Hero.css";

const Hero = () => {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText === "") return;
    setLoading(true);
    navigate("/search?q=" + searchText);
    setSearchText("");
    setLoading(false);
  };
  return (
    <div className="hero" id="hero">
      <div className="heroContainer">
        <form
          className="searchInputContainer searchForm"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            placeholder="Search Any Food..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            disabled={loading}
            type="submit"
            className="fa-solid fa-magnifying-glass"
          ></button>
        </form>
        <h1>Looking for your favourite Dish?</h1>
      </div>
    </div>
  );
};

export default Hero;
