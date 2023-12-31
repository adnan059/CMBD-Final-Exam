import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Home.css";
import { truncate } from "../utils/myFucntions";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );

        setCategories(res.data.categories);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert("Something Went Wrong!");
      }
    };
    fetchCategories();
  }, []);

  if (loading) return <h1 className="loading">Loading...</h1>;

  return (
    <section id="home" className="home">
      <div className="sectionContainer">
        <h1 className="sectionHeader">Categories</h1>

        <div className="categoryContainer">
          {categories?.map((cat, i) => (
            <Link
              className="catBox"
              to={`/category/${cat?.strCategory}`}
              state={{ catName: cat?.strCategory }}
              key={i}
            >
              <img src={cat?.strCategoryThumb} alt="" />
              <p className="catTitle">{cat?.strCategory}</p>
              <p className="catDesc">
                {truncate(cat?.strCategoryDescription, 25)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
