import {imageLink} from "../../config";
import css from "./PosterPreview.module.css"

const PosterPreview = ({title, poster_path}) => {

    return (
        <div>
            <img className={css.image} src={`${imageLink}${poster_path}`} alt={title}/>
        </div>

    );
};

export {PosterPreview};