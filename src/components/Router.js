import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe"
import Search from "./Search";
import Body from "./Body";

class Router extends Component {
  constructor(){
    super()
    this.state={}
  }

  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} exact/>
          <Route path="/recipes" component={Search}/>
          <Route path="/recipe/:id" component={Recipe}/>
        </Switch>
      </BrowserRouter>
    )
  }
}


export default Router;
