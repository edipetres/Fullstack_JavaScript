import React, { Component } from 'react';
import './App.css';
import { Router, Route, IndexRoute, IndexLink, hashHistory, Link } from 'react-router';
import axios from 'axios'

var http = require('http')

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/login' component={LoginForm} />
        <Route path='*' component={NotFound} />
      </Router>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to BookStore</h2>
          <Greetings />
        </div>
        <p className="App-intro">
          Here are all our books for you to browse.
        </p>
        <div className="Book-table">
          <BookStore />
        </div>
        <div>
          <AddBookForm />
        </div>
      </div>
    )
  }
}
class Greetings extends Component {
  render() {
    let message = null;
    var isLoggedIn = false;
    if (isLoggedIn) {
      message = <p>You are logged in as...</p>
    } else {
      message = <Link to='/login'>Login</Link>
    }
    return (<div>
      {message}
    </div>
    )
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert("Submitted: " + this.state.username);
    const username = this.state.username;
    const password = this.state.password;

    axios.post('https://localhost:3001/login', {
      name: username, 
      password: password
    })
    .then(function (response){
      console.log(response.data.token)
      if (response.data.token) {
        localStorage.setItem("token", response.data.token)
      }
    })
    .catch(function (error){
      console.error(error)
    });

  }

  render() {
    return (
      <div>
        <h2>Please log in</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Password
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Log in" />
        </form>
      </div>
    )
  }
}

const NotFound = () => <h1>404.. Page not found<br />  ¯\_(ツ)_/¯ </h1>


class AddBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', info: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.info + " and " + this.state.title);
    event.preventDefault();

  }

  render() {
    return (
      <div>
        <h2>Add new book</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Book title
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            More info
            <input type="text" name="info" value={this.state.info} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

class BookStore extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    }
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    http.get("https://localhost:3001/api/books", function (res) {
      var body = ''; // Will contain the final response
      // Received data is a buffer.
      // Adding it to our body
      res.on('data', function (data) {
        body += data;
      });
      // After the response is completed, parse it and log it to the console
      res.on('end', function () {
        try { var parsed = JSON.parse(body); }
        catch (err) {
          console.error(err);
        }
        this.setState({ books: parsed })
      }.bind(this));
    }.bind(this))
      // If any error has occured, log error to console
      .on('error', function (e) {
        console.log("Got error: " + e.message);
      });
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.state.books.map((book, i) => <TableRow key={i} data={book} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td><b>{this.props.data.id}</b></td>
        <td>{this.props.data.title}</td>
        <td>{this.props.data.info}</td>
      </tr>
    );
  }
}


export default App;