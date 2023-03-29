import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchProducts } from "../../../store/modules/productSlice";
import { Link } from "react-router-dom";
import calculateDiscountPercentage from "./calculateDiscountPercentage";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts({ products }));
  }, [dispatch]);
  console.log(products);

  return (
    <div className="mx-auto max-w-7xl mt-10 px-4 sm:px-6 lg:px-8 rounded-sm">
      <div className="bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl text-main font-inter font-bold tracking-tight text-mintcream text-center">
            Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => {
              const discountPercentage = calculateDiscountPercentage(
                product.price,
                product.discountedPrice
              );
              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col gap-y-3 rounded-md border border-gray-300 hover:border-gray-400 hover:shadow-lg transition-all duration-300 p-4 bg-mintcream"
                >
                  <div class="bg-white shadow-md rounded-lg p-4 w-64">
                    <div class="relative">
                      <img
                        class="w-full h-40 object-cover object-center rounded"
                        src={product.imageUrl}
                        alt="Product Image"
                      />
                      {discountPercentage > 0 && (
                        <span class="bg-red-500 text-white text-xs font-semibold absolute top-2 right-2 py-1 px-2 rounded">
                          {discountPercentage}% OFF
                        </span>
                      )}
                    </div>
                    <div class="mt-4">
                      <h2 class="text-gray-900 font-semibold text-lg">
                        {product.title}
                      </h2>
                      <div class="mt-2">
                        {discountPercentage > 0 ? (
                          <>
                            <span class="text-gray-900 font-semibold">
                              {product.discountedPrice} $
                            </span>
                            <span class="text-gray-500 line-through ml-2">
                              {product.price} $
                            </span>
                          </>
                        ) : (
                          <span class="text-gray-900 font-semibold">
                            {product.price} $
                          </span>
                        )}
                      </div>
                      <button class="bg-indigo-600 text-white font-semibold text-sm py-2 px-4 mt-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
