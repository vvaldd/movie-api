import {apiService} from "./apiService";
import {urls} from "../config";

const movieService = {
    // getAll: (page) => apiService.get(urls.movies.movies, {params:{page}}),
    getById: (id) => apiService.get(urls.movies.byId(id)),
    getAll: (genreId, page) => apiService.get(`discover/movie?page=${page}&with_genres=${genreId}`),
    // getAllByGenre: (genreId, page) => apiService.get(`https://api.themoviedb.org/3/discover/movie?page=5&with_genres=36`),

}

export {
    movieService
}