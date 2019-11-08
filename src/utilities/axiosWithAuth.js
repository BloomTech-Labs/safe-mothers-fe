
<<<<<<< HEAD
import axios from 'axios';

=======
>>>>>>> 883fbf830c1ea3349dd509eb21069d3a2f06cdd8
const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
<<<<<<< HEAD
        baseURL: "https://staging-be-labs17-safe.herokuapp.com/",
=======
        baseURL: "https://staging-be-labs17-safe.herokuapp.com",
>>>>>>> 883fbf830c1ea3349dd509eb21069d3a2f06cdd8
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    });
};

export default axiosWithAuth;