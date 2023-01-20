import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

let headers = {

}

const API = axios.create({
    // baseURL : process.env.REACT_APP_BASEURL,
    baseURL: 'https://api.shree.network/api',


    withCredentials: true,
    headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        // 'Access-Control-Allow-Origin': 'http://192.168.19:8081',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',


    }
});



// Auth Endpoints
export const login = (data) => API.post("/auth/login", data);
export const verifyOTP = (data) => API.post("/auth/verify-otp", data);





// Search Endpoints 
export const search = (data) => API.get(`search?query=${data}`);


// content endpoints
export const allMovies = () => API.get("/content");
export const getSinglePageData = (slug) => API.get(`/content?slug=${slug}`);

// subscriptions endpoint
export const getSubscriptions = () => API.get(`/subscriptions`);
export const checkIsPrimium = () => API.get(`/subscription/check`);

// users endpoint
export const deactivateAccount = () => API.delete(`/users`);


// trending endpoint
export const getTrending = () => API.get(`/trending/`);


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