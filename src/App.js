import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Audience from './components/audience'
import AudienceJoinPres from './components/AudienceJoinPres'
import { Link } from 'react-router-dom';

class App extends Component {
 
  render() {
      
      
    return (
      <Router>
      <Route path="/" exact>
        
        <Link to={`/audience/`}>Audience </Link>
        
        
      </Route>
      <Route path="/audience" component={Audience} />
      <Route path="/audience/join-presentation" component={AudienceJoinPres} />
    </Router>
         
                     
    )
    
  }

}



export default App;
  
