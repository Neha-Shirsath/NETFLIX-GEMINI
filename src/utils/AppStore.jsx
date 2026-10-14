import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./MoviesSlice";
import geminiReducer from "./GeminiSlice";
import configReducer from "./ConfigSlice";

const AppStore = configureStore({
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        gemini : geminiReducer,
        config : configReducer,
    },
});

export default AppStore;