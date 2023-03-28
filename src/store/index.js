import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import productsSlice from "./modules/productSlice";

const reducer = combineReducers({
  products: productsSlice,
});
const index = configureStore({
  reducer,
});
export default index;