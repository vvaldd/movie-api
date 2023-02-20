import {Navigate, Route, Routes} from "react-router-dom";

import {GenresPage, MovieInfoPage, AllMoviesPage, NotFoundPage, SearchPage} from "./pages";
import {MoviesPage} from "./layout";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<AllMoviesPage/>}/>
                    <Route path={'movies/:movieId'} element={<MovieInfoPage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}/>
                    <Route path={'genres/:genreId'} element={<AllMoviesPage/>}/>
                    <Route path={'genres/:genreId/:movieId'} element={<MovieInfoPage/>}/>
                    <Route path ={'search'} element={<SearchPage/>}/>
                    <Route path ={'search/:movieId'} element={<MovieInfoPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};