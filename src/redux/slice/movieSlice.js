import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movie: [],
    errors: null,
    movieListCard: null,
};

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},

});

const {reducer:movieReducer} = movieSlice;

const movieActions = {

}

export {
    movieReducer,
    movieActions
}