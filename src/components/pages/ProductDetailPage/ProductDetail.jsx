import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../../store/modules/productSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.products);
  let { id } = useParams();

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

  console.log(singleProduct);

  return (
    <div className="bg-white p-4 max-w-3xl mx-auto my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <img
            className="w-full h-96 object-cover object-center rounded"
            src={singleProduct.imageUrl}
          />
        </div>
        <div>
          <h2 className="text-gray-900 font-semibold text-lg">
            {singleProduct.title}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {singleProduct.description}
          </p>
          <div className="mt-2">
            <span className="text-gray-900 font-semibold">
              {singleProduct.discountedPrice}
            </span>
            <span className="text-gray-500 line-through ml-2">
              {singleProduct.price}
            </span>
          </div>
          <div className="bg-white max-w-3xl mx-auto my-16 md:my-4">
            <h2 className="font-bold text-xl lg:text-2xl">Reviews:</h2>
            {singleProduct.reviews && singleProduct.reviews.length ? (
              singleProduct.reviews.map((review) => (
                <div
                  key={review.id}
                  className="mt-6 mx-auto max-w-7xl px-4 sm:px-0 "
                >
                  <div className="flex text-black  pt-4  border-t border-gray w-96 md:w-80 md:px-2">
                    <div className="flex items-center gap-2">
                      <p className="bg-secondary rounded-full text-black w-16 h-16 flex justify-center items-center text-xs font-light font-body">
                        {review.username}
                      </p>
                      <p className="text-sm font-light font-body border-b border-beig border-6">
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
          <div className="flex justify-center">
            <button class="bg-main text-white font-semibold text-sm py-2 px-4 mt-4 md:mt-0 rounded hover:bg-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
