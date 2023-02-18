import {apiService} from "./apiService";
import {urls} from "../config";

const movieService = {
    getAll: (page) => apiService.get(urls.movies.movies, {params:{page}}),
    getById: (id) => apiService.get(urls.movies.byId(id))
}

export {
    movieService
}