import axios from "axios";
import Cookie from "js-cookie";

const csrfCookie = Cookie.get("csrftoken");

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
