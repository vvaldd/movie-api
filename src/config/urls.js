const baseURL = 'https://api.themoviedb.org/3/'

const movies = 'discover/movie'
const movieId = 'movie'
const genre = '/genre/movie/list'

const urls = {
    movies: {
        movies,
        byId: (id) => `${movieId}/${id}`,
        moviesByGenre: (genreId, page) => `discover/movie?page=${page}&with_genres=${genreId}`,
        movieSearch : (searchParams, page) => `search/movie?page=${page}&query=${searchParams}`
    },
    genres: {
        genre,
    }

}

export {
    baseURL,
    urls,
}