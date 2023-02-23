import {useNavigate} from "react-router-dom";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import css from "./MovieInfoCard.module.css"

const MovieInfoCard = ({movie}) => {

    const navigate = useNavigate();

    const {
        original_language,
        overview,
        popularity,
        release_date,
        poster_path,
        title,
        vote_average,
        genres
    } = movie;

    return (
        <div className={css.InfoCard}>
            <h1>{title}</h1>
            <div className={css.Image}>
                <PosterPreview title={title} poster_path={poster_path}/>
                <div>
                    {genres &&
                        genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)
                    }
                </div>
            </div>
            <StarsRating vote_average={vote_average}/>
            <h5>Original language: {original_language}</h5>
            <h5>Popularity: {popularity}</h5>
            <h5>Release date: {release_date}</h5>
            <p>{overview}</p>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export {MovieInfoCard};

