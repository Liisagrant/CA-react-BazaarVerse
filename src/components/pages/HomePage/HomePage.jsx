import React from "react";
import HeroBanner from "./HeroBanner";
import AllProducts from "../ProductsPage/AllProducts";
import Searchbar from "./Searchbar";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <AllProducts />
    </div>
  );
};

export default HomePage;
