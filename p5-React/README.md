# Pd5\_REACT

## Notes for Lars
Exercise from day one was completed including most of the tutorialspoint guides.
The bookstore exercise from day 2 is partially done up until the form-handling.

### Period-5 Single Page Applications with React

#### Describe the term Single Page Application (SPA) and why it’s relevant for modern web-applications
Navigating a single-page app doesn't involve going to an entirely new page. Instead, your pages (commonly known as views in this context) typically load inline within the same page itself.  
SPA is extremely good for responsive sites, if the application is designed properly, to handle most processing
on the client side, then the number of requests to the server is dramatically reduced, making the application faster.  
Also flexibility is advantage, it is possible to rewrite front-end with almost no impact on the server.  


Manipulating the DOM is a fundamental part of all modern, interactive web. React uses Virtual Dom, for every DOM object, there is a corresponding "virtual DOM object."  
A virtual DOM object is a representation of a DOM object, like a lightweight copy.  

#### Describe fundamental differences between the SPA-framework/libraries AngularJS and React
* Angular is a framework, React is a view-library, meaning, that React doesen\`t have Controllers, Services Factories, Filters etc.  
* AngularJS is a full-on MVC framework, compared to React, which only handles the V(view) from MVC.
* AngularJS had a clear separation between HTML and JavaScript, with the ng-xx directives as the way to connect the two. React has code and markup in one place (in your JavaScript), using a syntax called JSX that allows you to blend HTML within your JavaScript code.
* Both React and Angular2 has NO two way binding, it is a lot like javaScript.
```Word
Angualrjs - MVC
Reactjs - View

Angularjs - HTML/JS/CSS
Reactjs - JSX

Angularjs - Google
Reactjs - Facebook

Angualrjs - View, Models, controllers
Reactjs - All about components

Angualrjs - A lot to code
Reactjs - Less to code*
```

#### Describe the overall principles used in React to create a SPA

#### Explain, using an example, the fundamental building blocks in React Applications like:
* \#\### JSX.


A syntax extension to JavaScript, that produces React "elements". After compilation, JSX expressions become regular JavaScript objects and they can be used  inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions.
```JavaScript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>; // JSX
  }
    return <h1>Hello, Stranger.</h1>; // JSX
  }
```
* \#\### Rendering Elements.


Elements (variables) are the smallest building blocks of React apps, they describes what you want to see on the screen.
Elements are what components are "made of".
```JavaScript
const element = <h1>Hello, world</h1>;
```
* \#\### Components and Props.


Components are like JavaScript functions. They accept arbitrary inputs ("props") and return React elements describing what should appear on the screen.  
There are two types of data that control a component: props and state. props are set by the parent and they are fixed throughout the lifetime of a component.  
Props are Read-Only, whether a component is declared as a function or a class, it must never modify its own props
```JavaScript
// Component written as a ES6 class
class Welcome extends React.Component {
  render() {
    return (
         <h1>Hello, {this.props.name}</h1>
        )
  }}
```
```JavaScript
// Functional Component as a JS-function
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Lucas" />
      <Welcome name="Emma" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
#### * State (changeable data) and LifeCycle.


For data that is going to change, we have to use state In general, you should initialize state in the constructor, and then call setState when you want to change it. The only place you can set state directly is in the constructor.  
Outside the constructor you must set state via the method: this.setState(..);
```JavaScript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
Each component has several "lifecycle methods" that can be overrided to run code at particular times in the process:
1. Mounting - Called when an instance of a component is being created and inserted into the DOM.
2. Updating - Can be caused by changes to props or state. These methods are called when a component is being re-rendered.
3. Unmounting - Called when a component is being removed from the DOM.

* \#\### Handling Events.


With JSX you pass a function as the event handler, rather than a string and in camelCase.
```JavaScript
<button onClick={activateLasers}>
  Activate Lasers
</button>
```
#### * List and Keys.


We can build collections of elements, lists and include them in JSX using curly braces {}.
```JavaScript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
```
Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity, they must be unique. Most often used is IDs from of data as keys.
```JavaScript
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```
#### * Forms


React component that renders a form also controls what happens in that form on subsequent user input.
#### * Lifting State Up

#### Describe tools like Babel, WebPack and create-react-app and how the fit into the React-world


#### Explain, using examples, about Class Components, versus pure JavaScript functions in React, and when to use them.
```JavaScript

```


#### Explain the purpose of Client Side Routing in a SPA
In a web application, routing is the process of using URLs to drive the User Interface (UI). Main functions from the users view:
* Bookmarking.
* Sharing Users can share content by sending a link to a certain page.
* Navigation - loading the app first time, changing URL manually, clicking links within app, etc.


In a traditional web application, the server renders HTML one page at a time. Users navigate an application by clicking through URLs, which are sent to the server via HTTP, and the server responds appropriately via a server-side router.  
With a SPA, "ALL" Route Handling are taken care of Client-side.

#### Explain, using an example of your own, the basic “building blocks” in react-router
The task of navigating via URL's in a SPA is called Routing and is typically being handled by a specific Router Package, the most commonly used for React is react-router library.  
React Router:
* Keeps your UI in sync with the URL
* simple API with powerful features (lazy code loading, dynamic route matching, location transition handling).


A route handler can do several things:
* render a React Template.
* redirect to a new route.
* handle actions that involve changing a model or transitioning to a new route.

To install react-router (in a terminal, in you project root):
```Terminal
npm install react-router@3 --save
```

#### Explain what is required to use react-router with a create-react-app project built from scratch
![alt tag][image-1]
There is nothing in the code above, that takes care of the actual navigation That's the Job of the Router, the primary component of the React Router Library.

#### Explain, using examples, how JavaScript array methods, like filter, map and (reduce) are used to generate dynamic HTML structures (tables, ul's etc.), and explain about React Keys.


#### Explain, using an example. about MobX and the benefits a library like this, brings to a react-application.

### Explain Mobx and React.
Mobx - state management library for front end, typically used with React library. Mobx is automatic and a lot of the magic happens behind the scene. If you have a lot of values, you just need to note them as @observable values, so when this value updates, everything that depends on it also updates.
Basic MobX decorators like:
* @observable
* @computed
* @action - use on everything that can change
* @observer

npm install -g json-server ---------------\> install at the root of the project for running the json file backend from the server, the project is in.

[image-1]:	http://slides3-plaul.rhcloud.com/reactRouting/images/router-links.PNG
