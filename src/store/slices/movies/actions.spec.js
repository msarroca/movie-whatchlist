import { createMovie, deleteMovie, updateMovie } from "./actions";
import {
  addMovieToApi,
  deleteMovieToApi,
  updateMovieToApi,
} from "../../../services";
import store from "../../store";

jest.mock("../../../services/movies", () => ({
  addMovieToApi: jest.fn(),
  deleteMovieToApi: jest.fn(),
  updateMovieToApi: jest.fn(),
}));

describe("create movie method", () => {
  it("should have succesfull call", async () => {
    addMovieToApi.mockReturnValue(Promise.resolve());
    await store.dispatch(createMovie({ name: "film" }));
    const { data } = store.getState().movies;
    expect(data[0].name).toBe("film");
  });
  it("should have unsuccesfull call", async () => {
    addMovieToApi.mockReturnValue(Promise.reject(new Error("error")));
    await store.dispatch(createMovie({ name: "film" }));
    const { error } = store.getState().movies;
    expect(error).toBe("error");
  });
});

describe("updateMovie movie method", () => {
  it("should have succesfull call", async () => {
    updateMovieToApi.mockReturnValue(Promise.resolve());
    await store.dispatch(updateMovie({ id: 0, name: "name", value: "film2" }));
    const { data } = store.getState().movies;
    expect(data[0].name).toBe("film2");
  });
  it("should have unsuccesfull call", async () => {
    updateMovieToApi.mockReturnValue(Promise.reject(new Error("error")));
    await store.dispatch(updateMovie({ id: 0, name: "name", value: "film2" }));
    const { error } = store.getState().movies;
    expect(error).toBe("error");
  });
});

describe("delete movie method", () => {
  it("should have succesfull call", async () => {
    deleteMovieToApi.mockReturnValue(Promise.resolve());
    await store.dispatch(deleteMovie(0));
    const { data } = store.getState().movies;
    expect(data.length).toBe(0);
  });
  it("should have unsuccesfull call", async () => {
    deleteMovieToApi.mockReturnValue(Promise.reject(new Error("error")));
    await store.dispatch(deleteMovie(0));
    const { error } = store.getState().movies;
    expect(error).toBe("error");
  });
});
