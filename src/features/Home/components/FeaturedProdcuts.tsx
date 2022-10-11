import React, { Fragment, useEffect } from "react";
import useOnMount from "../../../hooks/useOnMount";
import { getFeaturedProds } from "../../../redux/actions/products.action";
import { useDispatch, useSelector } from "react-redux";
import { featuredProds } from "../../../redux/selectors/prods.selector";
import { API_BASE_URL } from "../../../utils/globals";

const FeaturedProdcuts = () => {
  const dispatch = useDispatch();
  const featuredProdcuts = useSelector(featuredProds);
  useEffect(() => {
    getFeaturedProds(dispatch);
  }, []);

  featuredProdcuts?.products?.map((prod: any) => {
    prod?.category.map((cat: any) => console.log(cat));
  });
  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12">
            <h4>Featured Products</h4>
          </div>
          <div className="prod-cards-container">
            {featuredProdcuts?.products?.map((prod: any) => (
              <div className="prod-cards-container__item" key={prod.id}>
                <div className="item__categories">
                  {prod?.category.map((cat: any) => (
                    <h6 key={cat.id} className="categories__category">
                      {cat.name}
                    </h6>
                  ))}
                </div>
                <div className="prod-name">
                  <h5 className="item__name">{prod.name}</h5>
                </div>
                <div className="item__img-cover">
                  <img src={`${API_BASE_URL + prod.img}`} alt="" />
                </div>
                <div className="item__price-rate">
                  <div className="price">
                    <p>${prod.price}</p>
                  </div>
                  <div className="rate">
                    <p>{prod.review_count} reviews</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(FeaturedProdcuts);
