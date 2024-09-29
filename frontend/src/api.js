import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

// automatically put the base url so we just disclose the path
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
});

// configure the api request if we have a token or error
api.interceptors.request.use(
    // if we have a token then send it with our request
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
);

export default api;
