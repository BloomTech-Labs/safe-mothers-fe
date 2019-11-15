import axios from "axios";
require("dotenv").config();

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  // retrieve API base url from .env
  console.log("react ", process.env);
  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";
  console.log(apiUrl);
  return axios.create({
    // sets base url, and authorization headers with each axios request
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
};

export default axiosWithAuth;
