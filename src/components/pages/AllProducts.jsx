import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AllProducts = ({ products }) => {
  console.log("AllProducts.jsx products:", products);
  return (
    <div className="mx-auto max-w-7xl mt-40 px-4 sm:px-6 lg:px-8 rounded-sm">
      <div className="bg-black">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-mintcream text-center">
            Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col gap-y-3 rounded-md border border-gray-300 hover:border-gray-400 hover:shadow-lg transition-all duration-300 p-4 bg-mintcream"
              >
                <Link to={`/products/${product.id}`}>
                  {/* Move the entire card content inside the Link component */}
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#" className="relative">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.description}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      NOK{product.price}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
