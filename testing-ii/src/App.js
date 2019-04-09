import React, { Component } from "react";
import "./App.css";
import Display from "./Components/Display";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Baseball</h1>
          <Display />
        </header>
      </div>
    );
  }
}

export default App;
