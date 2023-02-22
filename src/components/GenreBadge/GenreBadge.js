import {useNavigate} from "react-router-dom";

import css from "./GenreBadge.module.css"

const GenreBadge = ({genre}) => {
    const {id, name} = genre;

    const navigate = useNavigate();

    return (
        <div className={css.badge} onClick={() => navigate(`/genres/${id}`)}>
            <h3>{name}</h3>
        </div>
    );
};

export {GenreBadge};