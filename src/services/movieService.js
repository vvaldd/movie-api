import {apiService} from "./apiService";
import {urls} from "../config";

const movieService = {
    getAll: (with_genres, page) => apiService.get(urls.movies.movies, {params: {with_genres, page}}),
    getById: (id) => apiService.get(urls.movies.byId(id)),
    getSearch: (query, page) => apiService.get(urls.movies.search, {params:{query, page}})
}

export {
    movieService
}