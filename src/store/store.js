import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./slices";

const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
});

export default store;
