import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genreAction} from "../../redux/slice";
import {GenreListCard} from "../GenreListCard/GenreListCard";
import css from "../MoviesList/MoviesList.module.css"

const GenresList = () => {

    const {genres} =  useSelector(state => state.genres)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreAction.getAll())
    }, [dispatch])

    return (
        <div className={css.component}>
            {
                genres.map(genre => <GenreListCard key={genre.id} genre={genre}/>)
            }
        </div>

    );
};

export {GenresList};