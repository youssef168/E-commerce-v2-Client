import axiosInstance from "./axiosInstance";
import axios, { CancelTokenSource } from "axios";

export async function getData(path: string) {
  return await axiosInstance
    .get(path)
    .then((res) => res.data)
    .catch((err) => {
      return Promise.reject(err?.response?.data.message);
    });
}

// interface DataType {
//   [key: string]: any;
// }

export async function postData(path: string, data: any) {
  return await axiosInstance
    .post(path, data)
    .then((res) => res.data)
    .catch((err) => {
      return Promise.reject(err?.response?.data?.message);
    });
}

const requestHelpers = {
  getData,
  postData,
};

export default requestHelpers;
