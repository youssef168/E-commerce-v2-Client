import { requestHelpers } from "../../../lib";

const featuredProds = async () => {
  return requestHelpers.getData("products/featured/");
};

const productService = {
  featuredProds,
};

export default productService;
