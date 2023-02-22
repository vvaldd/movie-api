import {MoviesList} from "../../components";
import css from "./AllMoviesPage.module.css"

const AllMoviesPage = () => {

    return (
        <div className={css.AllMoviesPage}>
            <MoviesList/>
        </div>
    );
};

export {AllMoviesPage};