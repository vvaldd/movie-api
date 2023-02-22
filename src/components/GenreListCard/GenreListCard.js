import {useNavigate} from "react-router-dom";

import css from "./GenreListCard.module.css"

const GenreListCard = ({genre}) => {

    const {id, name} = genre;
    const navigate = useNavigate();

    return (
        <div className={css.genreCard} onClick={() => navigate(id.toString())}>
            <h1>{name}</h1>
        </div>
    );
};

export {GenreListCard};