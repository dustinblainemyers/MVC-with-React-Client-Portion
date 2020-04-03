import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Audience from './components/audience'
import AudienceJoinPres from './components/AudienceJoinPres'

import Nav from './components/nav'

class App extends Component {
  
  render() {
      const Links = [
        {href: "/presenter", name: "Presenter"},
        {href: "/audiences" , name: "Audience"}
     ]
      
    return (
      <Router>
      <Route path="/" exact>
      <div className="container">
      <h1>Green Light Red Light</h1>
      <Nav link={Links}/>
      </div>
        
        
      </Route>
      <Route path="/audiences" component={Audience} />
      <Route path="/audience/join-presentation/:user_id?" component={AudienceJoinPres} />
    </Router>
         
                     
    )
    
  }

}



export default App;
  
