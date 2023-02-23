import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {MovieInfoCard} from "../../components";
import {movieActions} from "../../redux/slice";
import {useEffect} from "react";

import css from "./MovieInfo.module.css"

const MovieInfo = () => {

    const {movieInfo} = useSelector(state => state.movies);
    const {movieId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getById({id: movieId}))
    },[dispatch, movieId])

    return (
        <div className={css.Wrap}>
            <div className={css.Card}>
                {movieInfo &&
                    <MovieInfoCard movie={movieInfo}/>
                }
            </div>
        </div>
    );
};

export {MovieInfo};