/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.data.push(payload);
    },
    deleteMovie: (state, { payload }) => {
      state.data = state.data.filter((_, index) => index !== payload);
    },
    updateMovie: (state, { payload }) => {
      state.data[payload.index][payload.name] = payload.value;
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
