import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],
    errors: null,
};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, thunkAPI) =>{
        try {
            const {data} = await genreService.getAll();
            return data

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
})

const {reducer:genreReducer} = genreSlice;

const genreAction = {
    getAll
}

export {
    genreReducer,
    genreAction
}