import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import productsSlice from "./modules/productSlice";
import cartSlice from "./modules/cartSlice";
import errorslice from "./modules/errorSlice";

const reducer = combineReducers({
  products: productsSlice,
  cart: cartSlice,
  error: errorslice,
});
const index = configureStore({
  reducer,
});
export default index;
