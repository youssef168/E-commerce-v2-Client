import { createSelector } from "@reduxjs/toolkit";

const getFeaturedProds = (state: any) => state.featuredProdcuts;

export const featuredProds = createSelector(getFeaturedProds, (state) => state);
