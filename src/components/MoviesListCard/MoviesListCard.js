import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {movieActions} from "../../redux/slice";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";
import {PosterPreview} from "../PosterPreview/PosterPreview";


const MoviesListCard = ({movie}) => {

    const {id,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        vote_average, genre_ids } = movie;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div >
            <div onClick={() => navigate(id.toString(), dispatch(movieActions.setMovieInfo(movie)))}>
                <div>id: {id}</div>
                <div>overview: {overview}</div>
                <div>popularity: {popularity}</div>
                <div>release_date: {release_date}</div>
                <div>title: {title}</div>
                {
                    genre_ids.map((genre, index) => <GenreBadge key={index} genre={genre}/>)
                }
                <PosterPreview title={title} poster_path={poster_path}/>
                <StarsRating vote_average={vote_average}/>
            </div>

        </div>
    );
};

export {MoviesListCard};