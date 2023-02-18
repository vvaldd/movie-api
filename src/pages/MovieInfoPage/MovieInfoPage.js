import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {MovieInfo} from "../../components";
import {movieActions} from "../../redux/slice";

const MovieInfoPage = () => {

    const {movieInfo} = useSelector(state => state.movies);
    const {movieId} = useParams();
    const dispatch = useDispatch();

    if(movieInfo === null) {
        dispatch(movieActions.getById({id: movieId}))
    }

    return (
        <div>
            {movieInfo &&
                <MovieInfo movie={movieInfo}/>
            }
        </div>
    );
};

export {MovieInfoPage};