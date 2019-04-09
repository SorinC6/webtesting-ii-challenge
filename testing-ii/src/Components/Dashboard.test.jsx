import React from "react";
import Dashboard from "./Dashbord";
import Display from "./Display";
import * as rt from "react-testing-library";

describe("<Dashboard/> Component", () => {
  it("renders without crasing", () => {
    rt.render(<Dashboard />);
  });
});
