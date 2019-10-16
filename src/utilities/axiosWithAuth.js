import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://production-be-labs17-safe.herokuapp.com/",
        headers: {
            Authorization: token
        }
    });
};