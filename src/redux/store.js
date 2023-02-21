import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer} from "./slice";
import {darkModeReducer} from "../components";


const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    darkMode: darkModeReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer,
})

export {
    setupStore
}
