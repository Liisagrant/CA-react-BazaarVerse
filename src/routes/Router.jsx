import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../components/pages/ProductsPage/AllProducts";
import ProductDetails from "../components/pages/ProductDetailPage/ProductDetail";
import HomePage from "../components/pages/HomePage/HomePage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default Router;
