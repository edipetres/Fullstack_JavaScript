import React from "react";
import {Router,Route, IndexRoute,hashHistory} from "react-router";
import Product from "./Product";
import App from "./App";
import Company from "./Company";
import Blog from "./Blog";
import Details from "./Details";
import Home from "./Home";
import NewBook from "./NewBook";
import Edit from "./Edit";
 export default class RouterComponent extends React.Component {

  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="products" component={Product}
                   bookStore={this.props.bookStore}/>
            <Route path="products/details/:id" component={Details}
                   bookStore={this.props.bookStore}/>
            <Route path="products/details/edit/:id" component={Edit}
                   bookStore={this.props.bookStore}/>       
            <Route path="company" component={Company}/>
            <Route path="blog" component={Blog}/>
            <Route path="newbook" bookStore={this.props.bookStore} component={NewBook}/>
          </Route>
        </Router>
      </div>
    );
  }
}