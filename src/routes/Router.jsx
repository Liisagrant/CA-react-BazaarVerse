import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../components/pages/ProductsPage/AllProducts";
import ProductDetails from "../components/pages/ProductDetailPage/ProductDetail";
import Herobanner from "../components/pages/HomePage/HeroBanner";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default Router;
