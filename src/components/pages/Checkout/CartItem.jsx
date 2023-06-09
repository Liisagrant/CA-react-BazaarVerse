import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../../store/modules/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  function displayPrice(item) {
    return item.discountedPrice && item.discountedPrice < item.price ? (
      <>
        <span className="text-red-700 font-semibold">
          $ {item.discountedPrice}
        </span>
        <span className="text-gray-500 line-through ml-2">$ {item.price}</span>
      </>
    ) : (
      <span className="text-gray-700 font-semibold">$ {item.price}</span>
    );
  }

  return (
    <div className="flex items-center justify-between m-6 border-b-2 border-lightblue">
      <img
        className="w-20 h-20 object-cover rounded-md"
        src={item.imageUrl}
        alt={item.title}
      />
      <div className="flex flex-col flex-1 ml-4">
        <span className="text-lg font-bold text-gray-700">{item.title}</span>
        <div className="mt-2">{displayPrice(item)}</div>
        <div className="flex justify-end">
          <button
            className="w-28 mb-4 mt-2 px-2 py-1 text-xs text-white bg-main rounded-md hover:bg-lightblue focus:outline-none focus:ring-2 focus:ring-blue-500 inline-block"
            onClick={() => dispatch(removeItemFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
