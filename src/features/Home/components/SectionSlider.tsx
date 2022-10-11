import React, { Fragment, useState, useRef } from "react";
import { Pagination, Navigation, A11y, SwiperOptions } from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { categoriesSections, categoriesTypes } from "../../../utils/globals";
import { LeftArrow, RightArrow } from "../../../components/ui/Arrows";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import SHADOWS from "../../../utils/ui.uitls";
import SectionCardCircle from "../../../components/ui/SectionCardCircle";

const SectionSlider = () => {
  const [cates] = useState(categoriesSections);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  console.log(leftArrowRef);

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div
            className="slider-section"
            style={{ boxShadow: SHADOWS.primary }}
          >
            <Swiper
              navigation={{
                prevEl: leftArrowRef.current ? leftArrowRef.current : undefined,
                nextEl: rightArrowRef.current
                  ? rightArrowRef.current
                  : undefined,
              }}
              modules={[Navigation, A11y]}
              slidesPerView={6}
              loop={true}
              spaceBetween={15}
              onInit={(swiper: any) => {
                console.log(swiper.params.navigation);
                swiper.params.navigation.prevEl = leftArrowRef.current;
                swiper.params.navigation.nextEl = rightArrowRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {cates.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <SectionCardCircle item={item} />
                </SwiperSlide>
              ))}
              <LeftArrow ref={leftArrowRef} />
              <RightArrow ref={rightArrowRef} />
            </Swiper>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

/**
 * re-render
 *
 * re-render
 */

export default React.memo(SectionSlider);
