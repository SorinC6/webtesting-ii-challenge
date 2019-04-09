import React from "react";
import App from "./App";
import * as rt from "react-testing-library";

describe("<App/> Component", () => {
  it("renders without crashing", () => {
    rt.render(<App />);
  });

  it("ball count add one when button clicked", () => {
    const app = rt.render(<App />);

    const ballButton = app.getByTestId("ball-button");

    rt.fireEvent.click(ballButton);

    const ballCount = app.getByTestId("balls-count");
    //console.log(ballCount);
    expect(app.getByText("1"));
  });
});
