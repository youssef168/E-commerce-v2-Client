import {
  startRegister,
  registerSuccess,
  registerError,
} from "../slices/userSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { RegisterData } from "../../features/auth/services/auth";
import authService from "../../features/auth/services/auth";

export const registerAction = async (
  data: RegisterData,
  dispatch: Dispatch
) => {
  dispatch(startRegister());
  console.log(data);
  try {
    const res = await authService.register(data);
    console.log(res);
    dispatch(registerSuccess(res));
    localStorage.setItem("current_user", JSON.stringify(res.data));
    localStorage.setItem("access", JSON.stringify(res.access));
    localStorage.setItem("refresh", JSON.stringify(res.refresh));
  } catch (error) {
    dispatch(registerError(error));
  }
};
