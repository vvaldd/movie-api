import axios from "axios";

import {accessToken, baseURL} from "../config";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = accessToken
    return config
})

export {
    apiService
}