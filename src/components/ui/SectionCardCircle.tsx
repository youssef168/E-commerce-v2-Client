import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

interface SectionCardCircleProps {
  name: string;
  icon: any;
}

const SectionCardCircle = ({ item }: { item: SectionCardCircleProps }) => {
  return (
    <Fragment>
      <div className="section-circle">
        <div className="section-circle__inner">
          <div className="section-circle__badge">
            <FontAwesomeIcon icon={item.icon} />
          </div>
          <h5 className="section-circle__title">{item.name}</h5>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(SectionCardCircle);
