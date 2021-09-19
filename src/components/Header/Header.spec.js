import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { render } from "../../testing/render";
import Hedaer from "./Header";

describe("Header component", () => {
  beforeEach(() => {
    render(<Hedaer />);
  });
  it("should add tag when I click enter", () => {
    expect(screen.getByText("MovieChecker")).toBeInTheDocument();
  });
});
