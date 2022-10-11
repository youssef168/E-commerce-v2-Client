import { createSlice } from "@reduxjs/toolkit";

interface InitState {
  products?: [];
  loading?: boolean;
  error?: string;
}

const initialState: InitState = {
  products: undefined,
  error: undefined,
  loading: false,
};

const featuredProdcuts = createSlice({
  name: "featuredProdcuts",
  initialState: initialState,
  reducers: {
    startGet: (state) => {
      state.error = undefined;
      state.products = undefined;
      state.loading = true;
    },
    successGet: (state, action) => {
      state.loading = false;
      state.products = action.payload.data;
      state.error = undefined;
    },
    failGet: (state, action) => {
      state.loading = false;
      state.products = undefined;
      state.error = action.payload;
    },
  },
});

const productSlice = {
  featuredProdcuts,
};

export const { startGet, successGet, failGet } =
  productSlice.featuredProdcuts.actions;

export default productSlice;
