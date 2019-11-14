import axios from "axios";
require("dotenv").config();

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";
  console.log(apiUrl);
  return axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
};

export default axiosWithAuth;
