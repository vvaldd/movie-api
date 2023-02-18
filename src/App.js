import {Route, Routes} from "react-router-dom";

import {MovieInfoPage, MoviesPage, NotFoundPage} from "./pages";
import {MainLayout} from "./layout/MainLayout";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/'} element={<MoviesPage/>}/>
                    <Route path={':movieId'} element={<MovieInfoPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};