import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

let headers = {

}

const API = axios.create({
    // baseURL : process.env.REACT_APP_BASEURL,
    baseURL: 'http://192.168.1.14:5000',


    withCredentials: true,
    headers    : {
        'Content-Type': "application/json",
        'Accept': "application/json",
        // 'Access-Control-Allow-Origin': 'http://192.168.19:8081',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',


    }
});



// GET 
export const interest = () => API.get("/api/v1/interest");
export const userData = () => API.get("/api/v1/me");

// POST 
export const register = (data) => API.post("/api/v1/register", data);
export const login = (data) => API.post("/api/v1/login", data);

// PUT 
export const updateProfile = (data) => API.put("/api/v1/update/profile", data)


// API.interceptors.request.use(
//     async (config) => {
//         const accessToken = await AsyncStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = 'Bearer ' + accessToken;
//         }
//         return config;
//     },
//     (err) => {
//         return Promise.reject(err);
//     }
// )
export default API;