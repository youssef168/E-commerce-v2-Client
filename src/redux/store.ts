import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  configureStore,
  combineReducers,
  applyMiddleware,
  MiddlewareArray,
} from "@reduxjs/toolkit";
import { registerReducer } from "./slices/userSlice";
import { productSlice } from "./slices";

const reducers = combineReducers({
  register: registerReducer,
  featuredProdcuts: productSlice.featuredProdcuts.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
