import {imageLink} from "../../config";

const PosterPreview = ({title, poster_path}) => {

    return (
        <div>
            <img src={`${imageLink}${poster_path}`} alt={title}/>
        </div>

    );
};

export {PosterPreview};