import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Alert = ({ errors }: { errors: any[] }) => {
  return (
    <Fragment>
      {errors && (
        <div className="message-container alert-bg">
          <div className="alert-header">
            <div className="alert-badge">
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <p className="alert-title">
              There were {errors.length} occured with your submission
            </p>
          </div>
          <ul className="alert-messages">
            {Array.isArray(errors)
              ? errors.map((error: any, index: any) => (
                  <li className="alert-message" key={index}>
                    {error}
                  </li>
                ))
              : null}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default React.memo(Alert);
