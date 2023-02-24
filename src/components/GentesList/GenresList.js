import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genreAction} from "../../redux/slice";
import {GenreListCard} from "../GenreListCard/GenreListCard";
import css from "./GenresList.module.css"

const GenresList = () => {

    const {genres, loading, errors} =  useSelector(state => state.genres)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreAction.getGenres())
    }, [dispatch])

    return (
        <div className={css.Component}>
            {
                genres.map(genre => <GenreListCard key={genre.id} genre={genre}/>)
            }
            {loading && <div className={css.Loading}></div>}
            {errors && <div className={css.Errors}>{errors}</div>}}
        </div>
    );
};

export {GenresList};