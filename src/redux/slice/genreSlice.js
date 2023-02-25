import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],
    errors: null,
    loading: null
};

const getGenres = createAsyncThunk(
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
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                const {genres} = action.payload
                state.genres = genres
                state.loading = false
            })
            .addCase(getGenres.pending, (state) => {
                state.loading = true

            })
            .addCase(getGenres.rejected, (state, action) => {
                const {status_message} = action.payload
                state.errors = status_message
                state.loading = false
            })
            .addDefaultCase((state, action) => {
                const [actionStatus] = action.type.split('/').slice(-1);
                state.loading = actionStatus === 'pending';
            })
})

const {reducer:genreReducer} = genreSlice;

const genreAction = {
    getGenres
}

export {
    genreReducer,
    genreAction
}