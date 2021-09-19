import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button componenet", () => {
  const mockedFunc = jest.fn();
  beforeEach(() => {
    render(<Button handleClick={mockedFunc} text="click-me" />);
  });
  it("should call and function when I press it", () => {
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockedFunc).toHaveBeenCalledTimes(1);
  });

  it("should call and function when I press it", () => {
    expect(screen.getByRole("button")).toHaveTextContent("click-me");
  });
});
