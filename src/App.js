import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Audience from './components/audience'
import AudienceJoinPres from './components/AudienceJoinPres'
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";

import Nav from './components/nav'

class App extends Component {
  
  render() {
      const Links = [
        {href: "/audience/join-presentation", name: "Join Presentation"},
        {href: "/audiences" , name: "Audience"}
     ]
      
    return (
      <Router>
      <Route path="/" exact>
        
      <Nav link={Links}/>
      <NavBar/>
        
      </Route>
      <Route path="/audiences" component={Audience} />
      <Route path="/audience/join-presentation/:user_id?" component={AudienceJoinPres} />
    </Router>
         
                     
    )
    
  }

}



export default App;
  
