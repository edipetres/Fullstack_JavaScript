import React from "react"

export default class StateApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      header: "Header from state...",
      "content": "Content from state...",
      "myvalue": "Hi from Eddie"
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <h2>{this.state.content}</h2>
        <p>{this.state.myvalue}</p>
      </div>
    );
  }
}