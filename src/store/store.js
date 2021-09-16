import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./slices";

const store = configureStore({
  reducer: {
    moviesSlice,
  },
});

export default store;
