import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

// INTERCEPTOR

API.interceptors.request.use(
  async function (config) {
    config.headers.common["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default API;
