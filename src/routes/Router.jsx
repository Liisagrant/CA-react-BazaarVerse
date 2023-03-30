import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../components/pages/ProductsPage/AllProducts";
import ProductDetails from "../components/pages/ProductDetailPage/ProductDetail";
import HomePage from "../components/pages/HomePage/HomePage";
import CheckoutPage from "../components/pages/Checkout/CheckoutPage";
import ContactPage from "../components/pages/ContactPage/Contact";
import SuccessPage from "../components/pages/success/SuccessPage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </>
  );
}

export default Router;
