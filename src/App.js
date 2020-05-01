import React from "react";
import LogInOut from "./components/LogInOut";
import UserHome from "./components/UserHome";
import test404 from "./components/test404";

import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <></>;
  }

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Header />

          <div className='container '>
            <div className='login '>
              <LogInOut />
            </div>
          </div>
        </Route>

        <Route path='/user-home' exact component={UserHome} />
        <Route component={test404} />
      </Switch>
    </Router>
  );
}

export default App;
