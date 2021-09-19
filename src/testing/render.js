import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";

const render = (ui, renderOptions = {}) => {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return { ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }), history };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
