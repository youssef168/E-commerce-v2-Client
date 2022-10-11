import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const RightArrow = React.memo(
  React.forwardRef((props, ref: any) => {
    return (
      <React.Fragment>
        <div ref={ref} className="slider-arrow-right slider-arrow">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </React.Fragment>
    );
  })
);

export const LeftArrow = React.memo(
  React.forwardRef((props, ref: any) => {
    return (
      <React.Fragment>
        <div ref={ref} className="slider-arrow slider-arrow-left">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
      </React.Fragment>
    );
  })
);
