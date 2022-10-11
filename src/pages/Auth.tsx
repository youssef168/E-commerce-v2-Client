import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Alert from "../components/ui/Alert";
import Success from "../components/ui/Success";
import LoginView from "../features/auth/components/LoginView";
import RegisterView from "../features/auth/components/RegisterView";
import NavLayout from "../layouts/NavLayout";
import { getRegisterData } from "../redux/selectors/auth.selector";

const Auth = () => {
  const registerData = useSelector(getRegisterData);

  console.log(registerData.errorMsg);
  return (
    <Fragment>
      <NavLayout>
        <div className="container-fluid">
          <Alert errors={registerData?.errorMsg} />
          {registerData.isSuccess && (
            <Success message="Successfully Registered!" />
          )}
          <div className="auth-container mt-5 pb-2">
            <LoginView />
            <RegisterView />
          </div>
        </div>
      </NavLayout>
    </Fragment>
  );
};

export default Auth;
