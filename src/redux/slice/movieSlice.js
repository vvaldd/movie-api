import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";

const initialState = {
    movies: [],
    page: null,
    total_pages: null,
    errors: null,
    movieInfo: null,
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(page);
            return data

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'carSlice/getById',
    async ({id}, thunkAPI)=>{
        try {
            const {data} = await movieService.getById(id);
            return data

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovieInfo: (state, action) => {
            state.movieInfo = action.payload
        },
    },

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.movies = results
                state.page = page
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movieInfo = action.payload
            })

});

const {reducer:movieReducer, actions: {setMovieInfo}} = movieSlice;

const movieActions = {
    getAll,
    getById,
    setMovieInfo
}

export {
    movieReducer,
    movieActions
}