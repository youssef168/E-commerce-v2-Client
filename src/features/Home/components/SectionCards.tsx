import React, { Fragment } from "react";
const mobileImage = require("../../../assets/images/h5_banner1.jpg");

const SectionCards = () => {
  return (
    <Fragment>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card-content bg-img-one">
              <div className="card-content__texts">
                <div className="text-group">
                  <h6 className="text-subtitle uppercase">Get Rewarded</h6>
                  <h3>
                    Save Up <span>50% Off</span>
                  </h3>
                  <p>Best price on the market!</p>
                </div>
                <div className="btn-texts">
                  <button>Shop Now</button>
                </div>
              </div>
              {/* <div className="card-content__img">
                <img src={mobileImage} alt="" />
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card-content bg-img-two">
              <div className="card-content__texts">
                <div className="text-group">
                  <h6 className="text-subtitle uppercase">New Arrivals</h6>
                  <h3>B&O Beoplay E8 3.0</h3>
                  <p>Free delivery for orders over 300$</p>
                </div>
                <div className="btn-texts">
                  <button>Shop Now</button>
                </div>
              </div>
              {/* <div className="card-content__img">
                <img src={mobileImage} alt="" />
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card-content bg-img-three">
              <div className="card-content__texts">
                <div className="text-group">
                  <h6 className="text-subtitle uppercase">Top Seller</h6>
                  <h3>Beauty on Your Wrist</h3>
                  <p>Buy 1 get 1 free!</p>
                </div>
                <div className="btn-texts">
                  <button>Shop Now</button>
                </div>
              </div>
              {/* <div className="card-content__img">
                <img src={mobileImage} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(SectionCards);
