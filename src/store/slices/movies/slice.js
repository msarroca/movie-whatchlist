/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  nextId: 0,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setAddMovie: (state, { payload }) => {
      state.data.push({ ...payload, id: state.nextId });
      state.nextId += 1;
      state.data.sort((movie1, movie2) => movie1.id - movie2.id);
      state.data.sort((movie1, movie2) => movie1.watched - movie2.watched);
    },
    setDeleteMovie: (state, { payload }) => {
      state.data = state.data.filter((movie) => movie.id !== payload);
    },
    setUpdateMovie: (state, { payload }) => {
      state.data.find((e) => e.id === payload.id)[payload.name] = payload.value;
      state.data.sort((movie1, movie2) => movie1.id - movie2.id);
      state.data.sort((movie1, movie2) => movie1.watched - movie2.watched);
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const {
  setAddMovie,
  setDeleteMovie,
  setUpdateMovie,
  setIsLoading,
  setError,
} = moviesSlice.actions;
export default moviesSlice.reducer;
