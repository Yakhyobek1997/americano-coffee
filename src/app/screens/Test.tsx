import React, { Component, MouseEventHandler } from "react";

interface TestState {
  brand: string;
  model: string;
  color: string;
  year: number;
}

class Test extends Component<{}, TestState> {
    changeColor: MouseEventHandler<HTMLButtonElement> | undefined;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 2000,
    };
  }

  changeDetail = () => {
    this.setState({
      brand: "Tesla",
      model: "Model S",
      color: "blue",
      year: 2024,
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
    // runs after first render => RETRIEVE DATA FROM BACKEND SERVER
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    // runs before component unmount
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    // runs after component updates (props or state change)
  }

  
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }

  export default Test;