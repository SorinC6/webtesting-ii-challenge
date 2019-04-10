import React from "react";
import Dashboard from "./Dashbord";
import Display from "./Display";
import * as rt from "react-testing-library";

afterEach(rt.cleanup);

describe("<Dashboard/> Component", () => {
  it("renders without crasing", () => {
    rt.render(<Dashboard />);
  });

  // it("ball count add one when button clicked", () => {
  //   const dashboad = rt.render(<Dashboard />);
  //   const display = rt.render(<Display />);
  //   const ballButton = dashboad.getByTestId("ball-button");

  //   rt.fireEvent.click(ballButton);

  //   const ballCount = display.getByTestId("balls-count");
  //   //console.log(ballCount);
  //   expect(display.getByText('1'));
  // });

  //   test("ball count add one when button clicked", () => {
  //     const dashboard = rt.render(<Dashboard />);
  //     const display = rt.render(<Display />);
  //     const ballButton = dashboard.getByTestId(/ball-button/i);

  //     rt.fireEvent.click(ballButton);

  //     const ballsCount = display.getByTestId(/balls-count/i);
  //     expect(ballsCount).toHaveTextContent("1");
  //   });
});
