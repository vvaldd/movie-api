import {useNavigate} from "react-router-dom";

const GenreBadge = ({genre}) => {
    const {id, name} = genre;

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/genres/${id}`)}>
            <div>{name}</div>
        </div>
    );
};

export {GenreBadge};