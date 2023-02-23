import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {movieActions} from "../../redux/slice";
import {StarsRating} from "../StarsRating/StarsRating";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from "./MoviesListCard.module.css"

const MoviesListCard = ({movie}) => {

    const {
        id,
        overview,
        poster_path,
        release_date,
        title,
        vote_average
    } = movie;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className={css.Card}>
             <div onClick={() => navigate(id.toString(), dispatch(movieActions.setMovieInfo(movie)))}>
                 <h3> {title}</h3>
                 <PosterPreview title={title} poster_path={poster_path}/>
                 <h5>Release date: {release_date}</h5>
                 <p>Overview: {overview}</p>
                 <StarsRating vote_average={vote_average}/>
             </div>
        </div>
    );
};

export {MoviesListCard};