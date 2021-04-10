import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route, HashRouter } from "react-router-dom";

import LoginPage from "./pages/authentication/login/login.page";
import HomePage from "./pages/home/home.page";

const history = createBrowserHistory();
export default function App() {
  return (
    <Router history={history}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </HashRouter>
    </Router>
  );
}
