import React from "react"

export default class PropsOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "Header from props...",
      "content": "Content from props..."
    }
  }


  render() {
    return (
      <div>
        <a href="https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm" target="_blank">
          Add Code for the "Props Overview" step
           </a>
        <Header headerProp={this.state.header}/>
        <Content contentProp={this.state.content}/>
      </div>
    )
  }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h3>{this.props.headerProp}</h3>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}
