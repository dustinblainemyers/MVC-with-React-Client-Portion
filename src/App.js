import React from "react";
import LogInOut from "./components/LogInOut";
import UserHome from "./components/UserHome";

import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <></>;
  }

  return (
    <Router>
      <Route path='/' exact>
        <Header />

        <div className='container '>
          <div className='login '>
            <LogInOut />
          </div>
        </div>
      </Route>

      <Route path='/user-home' component={UserHome} />
    </Router>
  );
}

export default App;
