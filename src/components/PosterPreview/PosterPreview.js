import {imageLink} from "../../config";
import {useSelector} from "react-redux";

const PosterPreview = () => {

    const {movieInfo:{poster_path, title}} = useSelector(state => state.movies);

    return (
        <div>
            <img src={`${imageLink}${poster_path}`} alt={title}/>
        </div>

    );
};

export {PosterPreview};