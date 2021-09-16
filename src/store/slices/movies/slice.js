/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.movies.push(payload);
    },
    deleteMovie: (state, { payload }) => {
      state.movies = state.movies.filter((_, index) => index !== payload);
    },
    updateMovie: (state, { payload }) => {
      state.movies[payload.index][payload.name] = payload.value;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { addMovie, deleteMovie, updateMovie, setIsLoading, setError } =
  moviesSlice.actions;
export default moviesSlice.reducer;
