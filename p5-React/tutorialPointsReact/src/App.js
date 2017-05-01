import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, IndexLink } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="left-header">
            <ul>
              <li><Link activeClassName="active" to="/jsx">JSX</Link></li>
              <li><Link activeClassName="active" to="/components">Components</Link></li>
              <li><Link activeClassName="active" to="/state">State</Link></li>
              <li><Link activeClassName="active" to="/propsoverview">Props Overview</Link></li>
              <li><Link activeClassName="active" to="/propsvalidation">Props Validation</Link></li>
              <li><Link activeClassName="active" to="/componentapi">Component API</Link></li>
              <li><Link activeClassName="active" to="/componentlifecycle">Component Life Cycle</Link></li>
              <li><Link activeClassName="active" to="/forms">Forms</Link></li>
              <li><Link activeClassName="active" to="/events">Events</Link></li>
              <li><Link activeClassName="active" to="/refs">Refs</Link></li>
              <li><Link activeClassName="active" to="/keys">Keys</Link></li>
              <li><Link activeClassName="active" to="/more">More</Link></li>
              <li><IndexLink activeClassName="active" to="/">INFO</IndexLink></li>
            </ul>
          </div>
          <div className="right-header">
            <img src={logo} className="App-logo" alt="logo" />

          </div>
        </div>
        <div className="App-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
