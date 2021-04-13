import React, { useContext } from 'react';
import { createBrowserHistory } from 'history';
import {
  Router,
  Switch,
  Route,
  HashRouter,
  Redirect
} from 'react-router-dom';

import LoginPage from './pages/authentication/login/login.page';
import HomePage from './pages/home/home.page';
import RegisterPage from './pages/authentication/register/register.page';
import ConfirmRegisterPage from './pages/authentication/register/confirm-register.page';
import { AuthContext } from './context/auth.context';

const history = createBrowserHistory();

export default function App() {
  const {
    state: { isAuthenticated }
  } = useContext(AuthContext);
  return (
    <Router history={history}>
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              isAuthenticated ? (
                <HomePage />
              ) : (
                <Redirect to="/login" />
              )
            }
          ></Route>
          <Route
            exact
            path="/login"
            render={() =>
              isAuthenticated ? <Redirect to="/" /> : <LoginPage />
            }
          />
          <Route exact path="/register" component={RegisterPage} />
          <Route
            exact
            path="/confirmRegister"
            component={ConfirmRegisterPage}
          />
        </Switch>
      </HashRouter>
    </Router>
  );
}
