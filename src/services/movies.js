import { mockApiCall } from "../utils";

// eslint-disable-next-line import/prefer-default-export
export const addMovieToApi = async (movie) => {
  const response = await mockApiCall(3000, movie);
  return response;
};
