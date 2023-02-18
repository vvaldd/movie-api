import {NavLink} from "react-router-dom";

import {UserInfo} from "../UserInfo/UserInfo";
import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={""}>movies</NavLink>
            <NavLink to={"genres"}>genres</NavLink>
            <UserInfo/>
        </div>
    );
};

export {Header};