import { requestHelpers } from "../../../lib";
import { GoAsType } from "../components/RegisterView";

export interface LoginInterface {
  username: string;
  password: string;
}

function login(username: string, password: string) {
  return requestHelpers.postData("auth/login/", { username, password });
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  repassword: string;
  go_as: GoAsType;
}

function register(data: RegisterData) {
  // console.log(data);
  return requestHelpers.postData("auth/register/", data);
}

const authService = {
  login,
  register,
};

export default authService;
