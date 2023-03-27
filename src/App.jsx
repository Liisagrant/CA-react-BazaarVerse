import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchProducts } from "./components/store/modules/productSlice";
import Footer from "./components/Footer";
import "./index.css";
import Header from "./components/Global/Header";
import HeroBanner from "./components/HeroBanner";
import AllProducts from "./components/pages/AllProducts";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.products);

  // console.log(products);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Header />
        <HeroBanner />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
