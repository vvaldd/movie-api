import {axiosService} from "./axiosService";
import {urls} from "../constants";

const movieService = {
    getAll: (page) => axiosService.get(urls.movies.movies, {params:{page}}),
    getById: (id) => axiosService.get(urls.movies.byId(id))
}

export {
    movieService
}