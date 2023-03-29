import React from "react";

function ShoppingCart() {
  return (
    <div className="bg-gray-50 max-w-5xl mx-2 md:mx-auto my-20 shadow-md rounded-md">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-300">
          <h1 className="text-xl font-bold text-gray-700">Shopping Cart</h1>
          <button className="px-3 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            Clear Cart
          </button>
        </div>
        <div className="flex-1 px-4 py-2 overflow-y-auto">
          {/* List of items in cart */}
          {/* You can map through items in the cart and display them here */}
          {/* Example item */}
          <div className="flex items-center justify-between mb-4">
            <img
              className="w-1/4 h-auto object-cover rounded-md"
              src="https://via.placeholder.com/150"
              alt="Item"
            />
            <div className="flex flex-col flex-1 ml-4">
              <span className="text-lg font-bold text-gray-700">Item Name</span>
              <span className="text-sm text-gray-500">Price: $9.99</span>
              <button className=" w-40 mt-2 px-2 py-1 text-xs text-white bg-main rounded-md hover:bg-lightblue focus:outline-none focus:ring-2 focus:ring-blue-500 inline-block">
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="px-4 py-2 bg-gray-100 flex justify-between">
          <div className="text-lg font-bold text-gray-700">Total:</div>
          <div className="text-lg font-bold text-gray-700">$9.99</div>
        </div>
        <div className="px-4 py-2 bg-gray-100 flex justify-center">
          <button className="w-1/2 py-2 text-white bg-main rounded-md hover:bg-lightblue focus:outline-none focus:ring-2 focus:ring-blue-500">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
