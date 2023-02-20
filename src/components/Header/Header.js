import {NavLink} from "react-router-dom";

import {UserInfo} from "../UserInfo/UserInfo";
import css from './Header.module.css';
import {Search} from "../Search/Search";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={"movies"}>movies</NavLink>
            <NavLink to={"genres"}>genres</NavLink>
            <Search/>
            <UserInfo/>
        </div>
    );
};

export {Header};