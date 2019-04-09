import React from "react";
import Display from "./Display";
import * as rt from "react-testing-library";

describe("<Display/> Component", () => {
  it("render without crasing", () => {
    rt.render(<Display />);
  });

  it("display balls title", () => {
    const display = rt.render(<Display />);
    //display.getByTestId("balls");
    expect(display.getByText(/Balls Count/i));
    //expect(ballsCount).toHaveTextContent(/balls count/i);
  });
});
