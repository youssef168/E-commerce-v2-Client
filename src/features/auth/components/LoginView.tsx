import React, { Fragment } from "react";
import { BluePrimaryBtnMemo } from "../../../components/ui/Button";

const LoginView = () => {
  return (
    <Fragment>
      <div className="auth-content">
        <div className="auth-content__header">
          <h3>Login</h3>
        </div>
        <div className="auth-content__elements">
          <div className="auth_content__element mb-3">
            <div className="auth-content__element__label">
              <p className="mb-0">Username or Email Address</p>
            </div>
            <div className="auth-content__element__input">
              <input
                type="email"
                required
                className="form-control shadow-none"
                placeholder="Enter Email"
              />
            </div>
          </div>
          <div className="auth_content__element mb-3">
            <div className="auth-content__element__label">
              <p className="mb-0">Password</p>
            </div>
            <div className="auth-content__element__input">
              <input
                type="password"
                required
                className="form-control shadow-none"
                placeholder="Enter Password"
              />
            </div>
          </div>
        </div>
        <div className="auth-content-helpers">
          <div className="auth-content-helper">
            <input type="checkbox" id="rememberme" />
            <label htmlFor="rememberme">Remember me</label>
          </div>
          <div className="auth-content-helper">
            <h6>Lost your password?</h6>
          </div>
        </div>
        <div className="auth-btn">
          <BluePrimaryBtnMemo text="Login" />
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(LoginView);
