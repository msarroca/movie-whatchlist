import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../testing/render";
import { addMovieToApi } from "../../services";
import Form from "./Form";

jest.mock("../../services", () => ({
  addMovieToApi: jest.fn(),
}));

describe("Form component", () => {
  beforeEach(() => {
    render(<Form />);
  });
  it("should add tag when I click enter", () => {
    const input = screen.getByTestId("input-tag");
    userEvent.type(input, "tag");
    fireEvent.keyDown(input, { key: "Enter" });
    expect(screen.getByText("tag")).toBeInTheDocument();
  });

  it("should add film name on movie input ", () => {
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "Jurassic Parc" } });
    expect(input.value).toBe("Jurassic Parc");
  });

  it("should add film when I press on submit", () => {
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "Jurassic Parc" } });
    const input2 = screen.getByTestId("input-tag");
    userEvent.type(input2, "horror");
    fireEvent.keyDown(input, { key: "Enter" });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(addMovieToApi).toHaveBeenCalledTimes(1);
  });
});
