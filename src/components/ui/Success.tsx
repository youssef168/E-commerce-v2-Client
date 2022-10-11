import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Success = ({ message }: { message: any }) => {
  return (
    <Fragment>
      <div className="message-container success-bg">
        <div className="success-content">
          <div className="success-icon">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <p className="success-message mb-0">{message}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(Success);
