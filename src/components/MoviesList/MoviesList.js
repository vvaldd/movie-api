import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux/slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {

    const {movies, page} = useSelector(state => state.movies)
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});
    const {genreId} = useParams();


    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page'), genreId}))
    }, [dispatch, query, genreId])

    return (
        <div>
            <button
                disabled={page === 1}
                onClick={()=> setQuery(query=>({page:+query.get('page')-1}))}>Prev</button>
            <button
                disabled={page === 500}
                onClick={()=> setQuery(query=>({page:+query.get('page')+1}))}>Next</button>
            {
                movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {MoviesList};