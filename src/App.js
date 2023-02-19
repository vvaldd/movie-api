import {Route, Routes} from "react-router-dom";

import {GenresPage, MovieInfoPage, MoviesPage, NotFoundPage} from "./pages";
import {MainLayout} from "./layout/MainLayout";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={'movie'} element={<MoviesPage/>}/>
                    <Route path={'movie/:movieId'} element={<MovieInfoPage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}/>
                    <Route path={'genres/:genreId'} element={<MoviesPage/>}/>
                    <Route path={'genres/:genreId/:movieId'} element={<MovieInfoPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};