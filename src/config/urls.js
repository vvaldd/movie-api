const baseURL = 'https://api.themoviedb.org/3/'

const movies = 'discover/movie'
const movieId = 'movie'
const genre = '/genre/movie/list'
const genresParams = 'with_genres'
const pageParams = 'page'

const urls = {
    movies: {
        movies,
        byId: (id) => `${movieId}/${id}`,
        moviesByGenre: (genreId, page) => `${movies}?${pageParams}=${page}&${genresParams}=${genreId}`,
    },
    genres: {
        genre,
    }

}

export {
    baseURL,
    urls,
}