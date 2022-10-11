import React, { Fragment, useCallback, useEffect, useMemo } from "react";
import { BluePrimaryBtnMemo } from "../../../components/ui/Button";
import { useAsyncRequest } from "../../../hooks/useAsyncRequest";
import useMountedState from "../../../hooks/useMountedState";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../../redux/actions/auth.action";
import { getRegisterData } from "../../../redux/selectors/auth.selector";
import { RegisterData } from "../services/auth";
import useRouter from "../../../hooks/useRouter";

// use it in auth service
export type GoAsType = "customer" | "vendor";

const RegisterView = () => {
  const [userData, setUserData] = useMountedState<RegisterData>({
    username: "",
    email: "",
    password: "",
    repassword: "",
    go_as: "customer",
  });
  const dispatch = useDispatch();
  const registerData = useSelector(getRegisterData);
  const router = useRouter();

  console.log(registerData.errorMsg);

  /**
   * assume there's no useCallback and the function ref has changed, what will happen
   */
  const handleSubmit = useCallback(async () => {
    /**
     * * added this async callback for a reason if the user clicked register now setUserData will fire before registerAction
     * * so now setUserData will wait until the registerAction finished
     */
    await registerAction(
      {
        username: userData!.username,
        email: userData!.email,
        password: userData!.password,
        repassword: userData!.repassword,
        go_as: userData!.go_as,
      },
      dispatch
    );
    if (registerData.isSuccess) {
      setUserData({
        username: "",
        email: "",
        password: "",
        repassword: "",
        go_as: "customer",
      });
      router.navigate("/");
    }
  }, [
    userData!.email,
    userData!.go_as,
    userData!.password,
    userData!.repassword,
    userData!.username,
  ]);

  /**
   * when react try to remove the component from react tree the default behavior is the request will goes on
   * and won't stop so if the component is unmounted and unavailable to react to read it the request will also go on!
   *
   * * NOTE: useEffect in react 18 runs twice, only in dev mode and strict mode
   */
  useEffect(() => {}, []);

  return (
    <Fragment>
      <div className="auth-content">
        <div className="auth-content__header">
          <h3>Register</h3>
        </div>
        <div className="auth-content__elements">
          <div className="auth_content__element mb-3">
            <div className="auth-content__element__label">
              <p className="mb-0">Email Address</p>
            </div>
            <div className="auth-content__element__input">
              <input
                type="email"
                required
                className="form-control shadow-none"
                placeholder="Enter Your Email"
                value={userData?.email}
                onChange={(e) =>
                  setUserData((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="auth_content__element mb-3">
            <div className="auth-content__element__label">
              <p className="mb-0">username</p>
            </div>
            <div className="auth-content__element__input">
              <input
                type="text"
                required
                className="form-control shadow-none"
                placeholder="Enter Your Username"
                value={userData?.username}
                onChange={(e) =>
                  setUserData((prevData) => ({
                    ...prevData,
                    username: e.target.value,
                  }))
                }
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
                placeholder="Enter Your Password"
                value={userData?.password}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
          </div>
          <div className="auth_content__element mb-3">
            <div className="auth-content__element__label">
              <p className="mb-0">Confirm Password</p>
            </div>
            <div className="auth-content__element__input">
              <input
                type="password"
                required
                className="form-control shadow-none"
                placeholder="Confirm Your Password"
                value={userData?.repassword}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    repassword: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>
        <div className="auth-options my-4">
          <div className="auth-option">
            <input
              type="radio"
              id="goAsCustomer"
              checked={userData?.go_as === "customer"}
              name="goAsOption"
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  go_as: "customer",
                }))
              }
              className="mb-4"
            />
            <label htmlFor="goAsCustomer">I am a customer</label>
          </div>
          <div className="auth-option">
            <input
              type="radio"
              id="goAsVendor"
              name="goAsOption"
              checked={userData?.go_as === "vendor"}
              onChange={() =>
                setUserData((prev) => ({
                  ...prev,
                  go_as: "vendor",
                }))
              }
            />
            <label htmlFor="goAsVendor">I am a vendor</label>
          </div>
        </div>
        <div className="auth-btn">
          <BluePrimaryBtnMemo
            text="Register"
            onClick={() => handleSubmit()}
            // disabled={registerLoading}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(RegisterView);
