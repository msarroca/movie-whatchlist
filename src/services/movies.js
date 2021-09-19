import { mockApiCall } from "../utils";

// eslint-disable-next-line import/prefer-default-export
export const addMovieToApi = async (movie) => {
  const response = await mockApiCall(3000, movie);
  return response;
};

export const deleteMovieToApi = async (id) => {
  const response = await mockApiCall(3000, id);
  return response;
};

export const updateMovieToApi = async (data) => {
  const response = await mockApiCall(3000, data);
  return response;
};
