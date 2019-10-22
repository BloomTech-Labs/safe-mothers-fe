import axios from "axios"

export default function(){
    const token = localStorage.getItem("token")
    return axios.create({
        headers: {
            'Authorization': token},
        baseURL: ''
    })
}

export const axiosInstance = () =>{
    return axios.create({
        baseURL: ''
    })
}