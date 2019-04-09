import React, { Component } from "react";
import Dashboad from "./Dashbord";

class Display extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  ballHandler = () => {
    // this.setState({
    //   balls: this.state.balls + 1
    // });

    this.setState(prevState => ({
      balls: prevState.balls + 1
    }));

    if (this.state.balls === 4) {
      this.setState({
        balls: 0
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Display</h2>
        <p data-testid="balls">Balls Count</p>
        <p data-testid="balls-count">{this.state.balls}</p>
        <p data-testid="strikes">Strikes Count</p>
        <p data-testid="strikes-count">{this.state.strikes}</p>
        <div>
          <Dashboad ballHandler={this.ballHandler} />
        </div>
      </div>
    );
  }
}

export default Display;
