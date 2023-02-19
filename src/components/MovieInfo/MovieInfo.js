import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {MovieInfoCard} from "../../components";
import {movieActions} from "../../redux/slice";

const MovieInfo = () => {

    const {movieInfo} = useSelector(state => state.movies);
    const {movieId} = useParams();
    const dispatch = useDispatch();

    if(movieInfo === null) {
        dispatch(movieActions.getById({id: movieId}))
    }
    return (
        <div>
            {movieInfo &&
                <MovieInfoCard movie={movieInfo}/>
            }
        </div>
    );
};

export {MovieInfo};