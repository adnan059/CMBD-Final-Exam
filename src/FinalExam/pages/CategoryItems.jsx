import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/CategoryItems.css";
import { truncate } from "../utils/myFucntions";

const CategoryItems = () => {
  const { state } = useLocation();
  const { catName } = state;
  const [catItems, setCatItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`
        );

        setCatItems(res.data.meals.splice(0, 20));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert("Something Went Wrong!");
      }
    };
    fetchItems();
  }, [catName]);

  if (loading) return <h1 className="loading">Loading...</h1>;

  return (
    <section className="categoryItems">
      <div className="sectionContainer">
        <h1 className="sectionHeader">{catName} Items</h1>
        <div className="catItemsContainer">
          {catItems?.map((item, i) => (
            <Link
              state={{ item: item?.strMeal }}
              className="catItem"
              to={`/item/${item?.idMeal}`}
              key={i}
            >
              <img src={item?.strMealThumb} alt={item?.strMeal} />
              <p>{truncate(item?.strMeal, 22)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryItems;
