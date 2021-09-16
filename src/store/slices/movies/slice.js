/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  isLoading: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state) => {
      state.value += 1;
    },
    deleteMovie: (state) => {
      state.value -= 1;
    },
    addWatchedMovie: (state) => {
      state.value -= 1;
    },
  },
});

export const { addMovie, deleteMovie, addWatchedMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
