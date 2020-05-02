import React from "react";
import LogInOut from "./components/LogInOut";
import UserHome from "./components/UserHome";
import test404 from "./components/test404";

import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import logo from "./images/logo.svg";

import { Row, Col, Card, CardTitle, Icon } from "react-materialize";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <></>;
  }

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <div className='main-container'>
            <header>
              <h1>Active Toggle</h1>
            </header>
            <div className='hero'>
              <div className='hero-image'>
                <img src={logo} alt='Active Toggle Logo' />
              </div>
              <div className='hero-text'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <LogInOut />
          </div>
        </Route>

        <Route path='/user-home' exact component={UserHome} />
        <Route component={test404} />
      </Switch>
    </Router>
  );
}

export default App;
