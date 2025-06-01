import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/",
});

// Add a request interceptor
instance.interceptors.request.use(
    (config) => {
        config.headers.api_key = "nsdlc98hroiwenl";
        console.log("REQUEST >>>>>>", config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    (response) => {
        console.log("RESPONSE >>>>>", response);
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
