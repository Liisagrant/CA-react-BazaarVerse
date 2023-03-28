import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout/Layout";
import HeroBanner from "./components/pages/HomePage/HeroBanner";
import AllProducts from "./components/pages/ProductsPage/AllProducts";
import ProductDetail from "../src/components/pages/ProductDetailPage/ProductDetail";
import { fetchProducts } from "./store/modules/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Router from "./routes/Router";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log("App.jsx products:", products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
