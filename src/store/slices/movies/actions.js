import { addMovieToApi } from "../../../services";
import { addMovie, setIsLoading, setError } from "./slice";

export const createMovie = (movie) => async (dispatch) => {
  let response;
  try {
    dispatch(setIsLoading(true));
    response = await addMovieToApi(movie);
    dispatch(addMovie(movie));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setIsLoading(false));
  }
  return response;
};

export default createMovie;
