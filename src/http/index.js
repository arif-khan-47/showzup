import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

let headers = {

}

const API = axios.create({
    // baseURL : process.env.REACT_APP_BASEURL,
    baseURL: 'https://api.shree.network/api',


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

export const allMovies = () => API.get("/content");
export const search = (data) => API.get(`search?query=${data}`);

// POST 
// export const register = (data) => API.post("/api/v1/register", data);
export const login = (data) => API.post("/auth/login", data);
export const verifyOTP = (data) => API.post("/auth/verify-otp", data);


// PUT 
// export const updateProfile = (data) => API.put("/api/v1/update/profile", data)


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