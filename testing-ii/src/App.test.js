import React from "react";
import App from "./App";
import * as rt from "react-testing-library";

describe("<App/> Component", () => {
  it("renders without crashing", () => {
    rt.render(<App />);
  });
});
