import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux/slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from "../MoviesList/MoviesList.module.css";

const SearchList = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const {moviesSearch, pageSearch, searchParams:{searchParams}} = useSelector(state => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getSearch({searchParams, page: query.get('page')}))
    }, [dispatch, query, searchParams])

    return (
        <div className={css.component}>
            <button className={css.buttonP}
                disabled={pageSearch === 1}
                onClick={()=> setQuery(query=>({page:+query.get('page')-1}))}>Prev</button>
            <button className={css.buttonN}
                disabled={pageSearch === 500}
                onClick={()=> setQuery(query=>({page:+query.get('page')+1}))}>Next</button>
            {
                moviesSearch.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {SearchList};

