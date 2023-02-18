import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {movieActions} from "../../redux/slice";

const MoviesListCard = ({movie}) => {

    const {id,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        vote_average,
        vote_count} = movie;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(id.toString(), dispatch(movieActions.setMovieInfo(movie)))}>
            <div>id: {id}</div>
            <div>original_language: {original_language}</div>
            <div>original_title: {original_title}</div>
            <div>overview: {overview}</div>
            <div>popularity: {popularity}</div>
            <div>release_date: {release_date}</div>
            <div>title: {title}</div>
            <div>vote_average: {vote_average}</div>
            <div>vote_count: {vote_count}</div>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
        </div>
    );
};

export {MoviesListCard};