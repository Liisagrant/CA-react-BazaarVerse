import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    singleProduct: null,
  },
  reducers: {
    SET_PRODUCTS: (state, action) => {
      console.log("SET_PRODUCTS: action.payload", action.payload);
      state.products = action.payload;
    },
    SET_SINGLE_PRODUCT: (state, action) => {
      console.log("SET_SINGLE_PRODUCT: action.payload", action.payload);
      state.singleProduct = action.payload;
    },
  },
});
export default productsSlice.reducer;

const { SET_PRODUCTS } = productsSlice.actions;
const { SET_SINGLE_PRODUCT } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/online-shop");
    const data = await response.json();
    console.log(data);
    dispatch(SET_PRODUCTS(data.products));
  } catch (e) {
    dispatch(setError(true, e.message));
    return console.error(e.message);
  }
};

export const fetchProductById = (id) => async (dispatch) => {
  dispatch(SET_SINGLE_PRODUCT({}));
  let response;
  try {
    response = await fetch(`https://api.noroff.dev/api/v1/online-shop${id}`);
    const data = await response.json();
    console.log("Single Product Data: ", data);
    dispatch(SET_SINGLE_PRODUCT(data));
    dispatch(setLoadingState(false));
  } catch (e) {
    console.log("here error happened :( ");
    return console.error(e.message);
  }
  if (response.ok) {
    console.log("the response is correct");
  } else {
    console.log("the response is not ok");
    dispatch(setError(true, "some error happened"));
  }
};
