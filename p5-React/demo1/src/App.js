import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {show: true};
    setInterval(() => {
      this.state = ({show: !this.state.show})
    }, 1000)
  }
  render() {
    const text = this.state.show ? this.props.name: "";
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <h2>Hello {this.props.name}</h2>
        </div>
      </div>
    );
  }
}

export default App;
