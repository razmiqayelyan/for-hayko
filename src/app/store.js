import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../features/movie/moveSlice'
import modalReducer from "../features/modal/modalReducer";

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        modal: modalReducer
    }
})