import {useRef} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {movieActions} from "../../redux/slice";
import css from './Search.module.css';

const Search = () => {

    const searchParams = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className={css.Search}>
            <input type="text" placeholder={'Search'} ref={searchParams} />
            <button onClick={() => navigate(
                ('/search'),
                dispatch(movieActions.setSearchMovie({searchParams: searchParams.current.value})))}>Search</button>
        </div>
    );
};

export {Search};