import React from "react";
import App from "./App";
import * as rt from "react-testing-library";
import "jest-dom/extend-expect";

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

  it("ball count to add one improved", () => {
    const app = rt.render(<App />);
    const ballButton = app.getByTestId("ball-button");

    rt.fireEvent.click(ballButton);

    const ballCount = app.getByTestId("balls-count");
    expect(ballCount).toHaveTextContent("2");

    rt.fireEvent.click(ballButton);

    expect(ballCount).toHaveTextContent("3");
  });
});
