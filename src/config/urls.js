const baseURL = 'https://api.themoviedb.org/3/'

const movies = 'discover/movie'
const movieId = 'movie'
const genre = '/genre/movie/list'
const search = './search/movie'

const urls = {
    movies: {
        movies,
        byId: (id) => `${movieId}/${id}`,
        search
    },
    genres: {
        genre,
    }

}

export {
    baseURL,
    urls,
}