import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./modules/home/home";
import Register from "./modules/register/register";
import Login from "./modules/login/login";

export class Routes extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
