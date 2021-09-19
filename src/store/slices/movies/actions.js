/* eslint-disable object-curly-newline */
import {
  addMovieToApi,
  deleteMovieToApi,
  updateMovieToApi,
} from "../../../services";
import {
  setAddMovie,
  setIsLoading,
  setError,
  setDeleteMovie,
  setUpdateMovie,
} from "./slice";

export const createMovie = (movie) => async (dispatch) => {
  let response;
  try {
    dispatch(setError(null));
    dispatch(setIsLoading(true));
    response = await addMovieToApi(movie);
    dispatch(setAddMovie(movie));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setIsLoading(false));
  }
  return response;
};

export const deleteMovie = (id) => async (dispatch) => {
  let response;
  try {
    dispatch(setError(null));
    dispatch(setIsLoading(true));
    response = await deleteMovieToApi(id);
    dispatch(setDeleteMovie(id));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setIsLoading(false));
  }
  return response;
};

export const updateMovie = (data) => async (dispatch) => {
  let response;
  try {
    dispatch(setError(null));
    dispatch(setIsLoading(true));
    response = await updateMovieToApi(data);
    dispatch(setUpdateMovie(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setIsLoading(false));
  }
  return response;
};
