import React from "react";
import LogInOut from "./components/LogInOut";
import UserHome from "./components/UserHome";
import test404 from "./components/test404";

import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import logo from "./images/logo.svg";
import history from "./utils/history";

import { Row, Col, Card, CardTitle, Icon } from "react-materialize";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <></>;
  }

  return (
    <Router history={history}>
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
                <p className='hero-header'>
                  Active Toggle gives students the ability to give real time and
                  anonymous group feedback about the pace or content of a
                  lesson.
                </p>
                <p>
                  Create a lesson today. You will get a light that simply turns
                  red or green in response to student feedback. Students can
                  take comfort that their individual responses will not be
                  revealed.
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
