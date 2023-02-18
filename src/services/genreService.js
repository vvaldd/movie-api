import {apiService} from "./apiService";
import {urls} from "../config";

const genreService ={
    getAll: () => apiService.get(urls.genres.genre)
}

export {
    genreService
}