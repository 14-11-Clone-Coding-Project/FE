import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use(
  // function that run before request
  function (config) {
    console.log("인터셉터 요청 성공!");
    return config;
  },
  // function that run before error request
  function (error) {
    console.log("인터셉터 요청 오류!");
    return Promise.reject(error);
  }
);

export default instance;
