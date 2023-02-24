import {imageLink, imageNotFound} from "../../config";
import css from "./PosterPreview.module.css"

const PosterPreview = ({title, poster_path}) => {

    if (!poster_path) {
        poster_path = imageNotFound
    }

    return (
        <div>
            <img className={css.Image} src={`${imageLink}${poster_path}`} alt={title}/>
        </div>

    );
};

export {PosterPreview};