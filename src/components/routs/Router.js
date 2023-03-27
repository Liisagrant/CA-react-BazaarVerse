import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "../shared/AllProducts";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
    </>
  );
}

export default Router;