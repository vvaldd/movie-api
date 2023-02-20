import {apiService} from "./apiService";
import {urls} from "../config";

const movieService = {
    getAll: (genreId, page) => apiService.get(urls.movies.moviesByGenre(genreId, page)),
    getById: (id) => apiService.get(urls.movies.byId(id)),
    getSearch: (searchParams, page) => apiService.get(urls.movies.movieSearch(searchParams, page))
}

export {
    movieService
}