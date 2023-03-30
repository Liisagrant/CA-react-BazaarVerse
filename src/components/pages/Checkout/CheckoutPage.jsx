import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItemFromCart } from "../../../store/modules/cartSlice";
import { clearCart } from "../../../store/modules/cartSlice";

function CheckoutPage() {
  const dispatch = useDispatch();
  const { itemsInCart } = useSelector((state) => state.cart);

  const getTotal = (itemsInCart) => {
    return itemsInCart.reduce((total, item) => {
      const price = item.discountedPrice ? item.discountedPrice : item.price;
      return total + price;
    }, 0);
  };

  const handleCheckout = () => {
    dispatch(clearCart());
  };

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

  console.log(itemsInCart);

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
          {itemsInCart.length > 0 ? (
            itemsInCart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between m-6 border-b-2 border-lightblue"
              >
                <img
                  className="w-20 h-20 object-cover rounded-md"
                  src={item.imageUrl}
                  alt={item.title}
                />
                <div className="flex flex-col flex-1 ml-4">
                  <span className="text-lg font-bold text-gray-700">
                    {item.title}
                  </span>
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
            ))
          ) : (
            <div className="text-gray-600 text-md mb-4 py-10 text-center">
              Your cart is empty
            </div>
          )}
        </div>
        <div className="px-4 py-2 bg-gray-100 flex justify-between">
          <div className="text-lg font-bold text-gray-700">Total:</div>
          <div className="text-lg font-bold text-gray-700">
            ${getTotal(itemsInCart).toFixed(2)}
          </div>
        </div>
        <div className="px-4 py-2 bg-gray-100 flex justify-center">
          {itemsInCart.length ? (
            <Link to="/success">
              <button
                onClick={handleCheckout}
                className="w-80 py-2 text-white bg-main rounded-md hover:bg-lightblue focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Checkout
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
