import {NavLink} from "react-router-dom";

import {UserInfo} from "../UserInfo/UserInfo";
import css from './Header.module.css';
import {Search} from "../Search/Search";
import {DarkMode} from "../DarkMode/DarkMode";

const Header = () => {

    return (
        <div className={css.Header}>
            <NavLink to={"movies"}>Movies</NavLink>
            <NavLink to={"genres"}>Genres</NavLink>
            <Search/>
            <DarkMode/>
            <UserInfo/>
        </div>
    );
};

export {Header};