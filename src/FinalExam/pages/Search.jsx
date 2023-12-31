import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Search.css";
import origin from "../assets/images/location.png";
import tag from "../assets/images/price-tag.png";
import { truncate } from "../utils/myFucntions";

const Search = () => {
  const { search } = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchText = search.split("=")[1];

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        );

        setSearchResults(res.data.meals);
        setLoading(false);
      } catch (error) {
        alert("Something Went Wrong!");
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchText]);

  console.log(searchResults);

  if (searchResults === null)
    return <h1 className="emptyList">No Such Item Found!</h1>;

  if (loading) return <h1 className="loading">Loading...</h1>;

  return (
    <section className="searchPage">
      <div className="sectionContainer">
        <h1 className="sectionHeader">{`'${searchText}'`} Items</h1>

        <div className="searchResContainer">
          {searchResults?.map((res, i) => {
            return (
              <Link
                state={{ item: res?.strMeal }}
                to={`/item/${res?.idMeal}`}
                key={i}
                className="resBox"
              >
                <img src={res?.strMealThumb} alt="" />
                <p>{truncate(res?.strMeal, 22)}</p>
                <div className="resContent">
                  <span>
                    <img src={tag} alt="" />
                    {res?.strCategory}
                  </span>
                  <span>
                    <img src={origin} alt="" />
                    {res?.strArea}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Search;
