const baseURL = 'https://api.themoviedb.org/3/'

const movies = 'discover/movie'
const movieId = 'movie'

const urls = {
    movies: {
        movies,
        byId:(id) => `${baseURL}/${movieId}/${id}`
    }

}

export {
    baseURL,
    urls
}