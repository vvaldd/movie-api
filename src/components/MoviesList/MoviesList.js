import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux/slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from "./MoviesList.module.css"


const MoviesList = () => {

    const {movies, page, loading} = useSelector(state => state.movies)
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});
    const {genreId} = useParams();

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page'), genreId}))
    }, [dispatch, query, genreId])

    return (
        <div>
            <div className={css.ComponentM}>
                {
                    movies.map(movie => <MoviesListCard className={'qwe'} key={movie.id} movie={movie}/>)
                }
                {loading && <div className={css.Loading}></div>}
            </div>
            <button className={css.ButtonP}
                    disabled={page === 1}
                    onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>Prev
            </button>
            <button className={css.ButtonN}
                    disabled={page === 500}
                    onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>Next
            </button>
        </div>
    );
};

export {MoviesList};