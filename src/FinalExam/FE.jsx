import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./assets/css/FE.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryItems from "./pages/CategoryItems";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SingleItem from "./pages/SingleItem";

const FE = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return (
    <>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/item/:id" element={<SingleItem />} />
        <Route path="/category/:catName" element={<CategoryItems />} />
      </Routes>
      <Footer />
    </>
  );
};

export default FE;
