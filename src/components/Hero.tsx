import React from "react";
const FirstImg: string =
  require("../assets/images/revslider_h5_img1.png").default;

const Hero = () => {
  return (
    <div className="container-fullwidth hero-cover position-relative overflow-hidden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="hero-content">
              <div className="hero-text">
                <div className="hero-titles">
                  <h3>DUALSENSE WIRELESS CONTROLLER</h3>
                  <h5>
                    <span>Bring Gaming</span> <br /> World To Life
                  </h5>
                </div>
                <div className="hero-price my-4">
                  <h5 className="hero-price-item">Starting at</h5>
                  <h3 className="hero-price-number">$449.99</h3>
                </div>
                <div className="hero-btn">
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 text-align-end d-flex felx-column">
            <div className="hero-img">
              <img
                src={require("../assets/images/revslider_h5_img1.png")}
                alt="PS controller"
              />
            </div>
            <div className="hero-img-lower">
              <img
                src={require("../assets/images/revslider_h5_img2.png")}
                alt="PS controller"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
