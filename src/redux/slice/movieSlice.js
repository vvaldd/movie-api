import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    page: null,
    total_pages: null,
    errors: null,
    movieInfo: null,
    searchParams: null,
    moviesSearch: [],
    pageSearch: null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({genreId, page}, thunkAPI) => {
        try {
            const {data} = await movieService.getAll(genreId, page);
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}, thunkAPI)=>{
        try {
            const {data} = await movieService.getById(id);
            return data

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getSearch = createAsyncThunk(
    'movieSlice/getSearch',
    async ({searchParams, page}, thunkAPI) => {
        try {
            const {data} = await movieService.getSearch(searchParams, page);
            console.log(data, searchParams, page)
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovieInfo: (state, action) => {
            state.movieInfo = action.payload
        },

        setSearchMovie: (state, action) => {
            state.searchParams = action.payload
        }
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
            .addCase(getSearch.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.moviesSearch = results
                state.pageSearch = page
            })

});

const {reducer:movieReducer, actions: {setMovieInfo, setSearchMovie}} = movieSlice;

const movieActions = {
    getAll,
    getById,
    setMovieInfo,
    setSearchMovie,
    getSearch
}

export {
    movieReducer,
    movieActions
}