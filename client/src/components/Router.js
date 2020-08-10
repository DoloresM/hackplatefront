import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "../App";
import Body from "./Body";
import Search from "./Search";
import Guide from "./Guide";
import Blog from "./Blog";
import Purchase from "./Purchase";


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
          <Route path="/search" component={Search}/>
          <Route path="/guide" component={Guide}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/purchase" component={Purchase}/>
        </Switch>
      </BrowserRouter>
    )
  }
}


export default Router;
