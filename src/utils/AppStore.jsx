import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./MoviesSlice";
import geminiReducer from "./GeminiSlice";

const AppStore = configureStore({
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        gemini : geminiReducer,
    },
});

export default AppStore;