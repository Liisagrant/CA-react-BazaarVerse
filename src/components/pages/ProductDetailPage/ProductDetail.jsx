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
    return <div>Loading...</div>;
  }

  console.log(singleProduct);

  const {
    imageUrl,
    title,
    description,
    discountedPrice,
    price,
  } = singleProduct;

  return (
    <div className="bg-white p-4 max-w-3xl mx-auto my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <img
            className="w-full h-96 object-cover object-center rounded"
            src={imageUrl}
          />
        </div>
        <div>
          <h2 className="text-gray-900 font-semibold text-lg">{title}</h2>
          <p className="text-gray-500 text-sm mt-1">{description}</p>
          <div className="mt-2">
            <span className="text-gray-900 font-semibold">
              {discountedPrice}
            </span>
            <span className="text-gray-500 line-through ml-2">{price}</span>
          </div>
          <button class="bg-main text-white font-semibold text-sm py-2 px-4 mt-4 rounded hover:bg-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
