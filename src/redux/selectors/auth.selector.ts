import { createSelector } from "@reduxjs/toolkit";

const getRegisterStore = (state: any) => state.register;

const getUser = (state: any) => state.register.currentUser;

/**
 * method returns the register data from redux store
 * @memoize
 */
export const getRegisterData = createSelector(
  getRegisterStore,
  (state) => state
);

/**
 * method to return the current
 * @memoize
 */
export const getCurrentUser = createSelector(getUser, (state) => state);
