import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../../store/modules/productSlice";
import { addItemToCart } from "../../../store/modules/cartSlice";
import { Link } from "react-router-dom";
import calculateDiscountPercentage from "../ProductsPage/calculateDiscountPercentage";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.products);
  let { id } = useParams();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  if (!singleProduct) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  function displayPrice(singleProduct) {
    return singleProduct.discountedPrice &&
      singleProduct.discountedPrice < singleProduct.price ? (
      <>
        <span className="text-red-700 font-semibold">
          {singleProduct.discountedPrice} $
        </span>
        <span className="text-gray-500 line-through ml-2">
          {singleProduct.price} $
        </span>
      </>
    ) : (
      <span className="text-gray-700 font-semibold">
        {singleProduct.price} $
      </span>
    );
  }

  function displayDiscountPercentage(singleProduct) {
    if (
      singleProduct.discountedPrice &&
      singleProduct.discountedPrice < singleProduct.price
    ) {
      const discountPercentage = calculateDiscountPercentage(
        singleProduct.price,
        singleProduct.discountedPrice
      );
      return (
        <div className="bg-red-500 w-20 text-center mt-2 text-white text-xs font-semibold py-1 px-2 rounded">
          {discountPercentage}% OFF
        </div>
      );
    }
    return null;
  }

  return (
    <div className="bg-white md:p-4 max-w-3xl mx-auto my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <img
            className="w-full h-96 object-cover object-center rounded"
            src={singleProduct.imageUrl}
          />
        </div>
        <div className="px-2">
          <h2 className="text-gray-900 font-semibold text-lg">
            {singleProduct.title}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {singleProduct.description}
          </p>
          <div className="mt-2">
            <div className="mt-2">{displayPrice(singleProduct)}</div>
            {displayDiscountPercentage(singleProduct)}
          </div>
          <div className="bg-white max-w-3xl mx-auto my-16 md:my-16">
            <h2 className="font-bold text-xl lg:text-2xl">Reviews:</h2>
            {singleProduct.reviews && singleProduct.reviews.length ? (
              singleProduct.reviews.map((review) => (
                <div
                  key={review.id}
                  className="mt-6 mx-auto max-w-7xl md:px-4 sm:px-0 "
                >
                  <div className="flex text-black  pt-4  border-t border-gray w-76 md:w-80 md:px-2">
                    <div className="flex items-center gap-2">
                      <p className="bg-secondary rounded-full text-black w-16 h-16 flex justify-center items-center text-center text-xs font-light font-body">
                        {review.username}
                      </p>
                      <p className="text-sm font-light font-body max-w-[200px]">
                        {review.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews for this product. Leave a review!</p>
            )}
          </div>
          <div className="flex flex-row justify-around">
            <div>
              <button
                onClick={() => {
                  dispatch(addItemToCart(singleProduct));
                  setButtonDisabled(true);
                }}
                disabled={buttonDisabled}
                className={`${
                  buttonDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-main hover:bg-lightblue focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                } text-white font-semibold text-sm py-2 px-4 mt-4 md:mt-0 rounded `}
              >
                add to cart
              </button>
            </div>
            <div>
              <Link to="/products">
                <button className="bg-main text-white font-semibold text-sm py-2 px-4 mt-4 md:mt-0 rounded hover:bg-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
                  More products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
