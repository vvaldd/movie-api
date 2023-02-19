import {useNavigate} from "react-router-dom";

const GenreListCard = ({genre}) => {

    const {id, name} = genre;
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(id.toString())}>
            <div>{name}</div>
        </div>
    );
};

export {GenreListCard};