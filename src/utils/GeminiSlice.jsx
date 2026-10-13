import { createSlice } from "@reduxjs/toolkit";

const GeminiSlice = createSlice({
    name: "gemini",
    initialState: {
        showGeminiSearch: false,
    },
    reducers:{
        toggleGeminiSearchView: (state) => {
            state.showGeminiSearch = !state.showGeminiSearch;
        },
    },
})

export const { toggleGeminiSearchView } = GeminiSlice.actions;

export default GeminiSlice.reducer;