import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    page: null,
    errors: null,
    loading: null,
    movieInfo: null,
    searchParams: [],
    moviesSearch: [],
    pageSearch: null
};

const getMovies = createAsyncThunk(
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
            .addCase(getMovies.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.movies = results
                state.page = page
                state.loading = false
            })
            .addCase(getMovies.pending, (state) => {
                state.loading = true
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.errors = action.payload
                state.loading = false
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movieInfo = action.payload
                state.loading = false
            })
            .addCase(getById.pending, (state) => {
                state.loading = true
            })
            .addCase(getById.rejected, (state, action) => {
                state.errors = action.payload
                state.loading = false
            })
            .addCase(getSearch.fulfilled, (state, action) => {
                const {page, results} = action.payload
                state.moviesSearch = results
                state.pageSearch = page
                state.loading = false
            })
            .addCase(getSearch.pending, (state) => {
                state.loading = true
            })
            .addCase(getSearch.rejected, (state, action) => {
                state.errors = action.payload
                state.loading = false
            })
            .addDefaultCase((state, action) => {
            const [actionStatus] = action.type.split('/').slice(-1);
            state.loading = actionStatus === 'pending';
        })

});

const {reducer:movieReducer, actions: {setMovieInfo, setSearchMovie}} = movieSlice;

const movieActions = {
    getMovies,
    getById,
    getSearch,
    setMovieInfo,
    setSearchMovie

}

export {
    movieReducer,
    movieActions
}