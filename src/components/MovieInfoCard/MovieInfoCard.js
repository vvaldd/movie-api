import {useNavigate} from "react-router-dom";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";

const MovieInfoCard = ({movie}) => {

    const navigate = useNavigate();

    const {
        id,
        original_language,
        original_title,
        overview,
        popularity,
        release_date,
        poster_path,
        title,
        vote_average,
        vote_count,
        genres
    } = movie;
    console.log(genres)

    return (
        <div>
            <div>id: {id}</div>
            <div>original_language: {original_language}</div>
            <div>original_title: {original_title}</div>
            <div>overview: {overview}</div>
            <div>popularity: {popularity}</div>
            <div>release_date: {release_date}</div>
            <div>title: {title}</div>
            <StarsRating vote_average={vote_average}/>
            <div>vote_count: {vote_count}</div>
            {genres &&
                genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)
            }
            <PosterPreview title={title} poster_path={poster_path}/>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export {MovieInfoCard};

