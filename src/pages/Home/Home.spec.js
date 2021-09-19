import React from "react";
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { render } from "../../testing/render";
import Home from "./Home";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({}),
}));

describe("Home component", () => {
  beforeEach(() => {
    render(<Home />);
    const form = screen.getByTestId("form");
    const input = within(form).getByTestId("input");
    fireEvent.change(input, { target: { value: "Jurassic Parc" } });
    const input2 = screen.getByTestId("input-tag");
    userEvent.type(input2, "horror");
    fireEvent.keyDown(input, { key: "Enter" });
  });

  it("should show spinner after click on submit", () => {
    const form = screen.getByTestId("form");
    const button = within(form).getByRole("button");
    fireEvent.click(button);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  it("should add film when I press on submit", async () => {
    const form = screen.getByTestId("form");
    const button = within(form).getByRole("button");
    fireEvent.click(button);
    await waitFor(() => screen.getByTestId("card"), {
      timeout: 5000,
    });
    expect(screen.getByTestId("card")).toBeInTheDocument();
  });
});
