import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleTextChange(value) {
    this.setState({messsage: value});
  }


  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleTextChange(e.target.value)} type="text" />
        <p>{this.state.message}</p>
      </div>

    );
  }
}
  


export default App;
