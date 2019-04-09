import React from "react";
import Display from "./Display";
import * as rt from "react-testing-library";
import "jest-dom/extend-expect";

describe("<Display/> Component", () => {
  it("render without crasing", () => {
    rt.render(<Display />);
  });

  test("display balls title", () => {
    const display = rt.render(<Display />);
    const ballsCount = display.getByTestId(/balls/i);
    expect(ballsCount).toHaveTextContent(/balls count/i);
  });

  test("display strikes title", () => {
    const display = rt.render(<Display />);
    const strikesCount = display.getByTestId("strikes");
    expect(strikesCount).toHaveTextContent(/strikes count/i);
  });
});
