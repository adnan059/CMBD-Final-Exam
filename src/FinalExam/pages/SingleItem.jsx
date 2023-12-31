import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../assets/css/SingleItem.css";

const SingleItem = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { item } = state;
  const [singleItem, setSingleItem] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchSingleItem = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setSingleItem(res.data.meals[0]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert("Something Went Wrong!");
      }
    };
    fetchSingleItem();
  }, [id]);

  if (loading) return <h1 className="loading">Loading...</h1>;

  return (
    <section className="singleItem">
      <div className="sectionContainer">
        <h1 className="sectionHeader">{item}</h1>
        <div className="singleItemDetails">
          <img src={singleItem?.strMealThumb} alt="" />
          <div className="singleItemContent">
            <p>
              Origin<span>{singleItem?.strArea}</span>
            </p>
            <p>
              Category<span>{singleItem?.strCategory}</span>
            </p>
            <p>
              Main Ingredients
              <span>
                {" "}
                {`${singleItem?.strIngredient1}, ${singleItem?.strIngredient2}, ${singleItem?.strIngredient3}`}
              </span>
            </p>
            <p>
              How to Prepare
              <span className="preparation">{singleItem?.strInstructions}</span>
            </p>
            <p>
              Youtube Link
              <a href={singleItem?.strYoutube} target="_blank" rel="noreferrer">
                {singleItem?.strYoutube}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleItem;
