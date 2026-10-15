import { createSlice } from "@reduxjs/toolkit";

const GeminiSlice = createSlice({
    name: "gemini",
    initialState: {
        showGeminiSearch: false,
        movieResults: null,
        movieNames: null,
    },
    reducers:{
        toggleGeminiSearchView: (state) => {
            state.showGeminiSearch = !state.showGeminiSearch;
        },
        addGeminiMoviesResult: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;            
        },
    },
})

export const { toggleGeminiSearchView, addGeminiMoviesResult } = GeminiSlice.actions;

export default GeminiSlice.reducer;