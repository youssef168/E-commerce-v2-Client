import { createSlice } from "@reduxjs/toolkit";

interface InitState {
  isAuthenticated?: boolean;
  errorMsg?: string;
  loading?: boolean;
  currentUser?: any | undefined;
  isSuccess?: boolean;
  access?: any;
  refresh?: any | undefined;
}

const initialState: InitState = {
  isAuthenticated: localStorage.getItem("current_user") ? true : false,
  errorMsg: undefined,
  isSuccess: false,
  loading: false,
  currentUser: localStorage.getItem("current_user")
    ? JSON.parse(localStorage.getItem("current_user") || "")
    : undefined,
  access: localStorage.getItem("access")
    ? JSON.parse(localStorage.getItem("access") || "")
    : undefined,
  refresh: localStorage.getItem("refresh")
    ? JSON.parse(localStorage.getItem("refresh") || "")
    : undefined,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    startRegister: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.currentUser = action.payload.data;
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      state.errorMsg = undefined;
      state.isSuccess = true;
    },
    registerError: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.currentUser = undefined;
      state.errorMsg = action.payload;
    },
  },
});

export const { registerError, registerSuccess, startRegister } =
  registerSlice.actions;

export const registerReducer = registerSlice.reducer;
