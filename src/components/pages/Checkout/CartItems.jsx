import React from "react";

function CartItem({ item }) {
  function displayPrice(item) {
    return item.discountedPrice && item.discountedPrice !== item.price ? (
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
      </div>
    </div>
  );
}

export default CartItem;
