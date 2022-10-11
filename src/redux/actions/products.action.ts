import { Dispatch } from "redux";
import { productService } from "../../features/Home/services";
import { successGet, failGet, startGet } from "../slices/productsSlice";

export const getFeaturedProds = async (dispatch: Dispatch) => {
  dispatch(startGet());
  try {
    const res = await productService.featuredProds();
    dispatch(successGet(res));
  } catch (err) {
    dispatch(failGet(err));
  }
};
