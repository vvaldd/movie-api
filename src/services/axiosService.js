import axios from "axios";

import {access, baseURL} from "../constants";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = access
    return config
})

export {
    axiosService
}