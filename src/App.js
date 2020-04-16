import React  from 'react';
import LogInOut from "./components/LogInOut";
import UserHome from "./components/UserHome";
import Audience from "./components/audience";
import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";

import AudienceJoinPres from './components/AudienceJoinPres'
import Presenter from './components/presenter'

import Nav from './components/nav'

function App() {
  
  const { loading} = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

      const Links = [
        {href: "/presenter", name: "Presenter"},
        {href: "/audiences/:user_id?" , name: "Audience"}
     ]
     
      
    return (
      <Router>
      <Route path="/" exact>
      <div className="container">
      <LogInOut/>

      


      </div>
        
        
      </Route>
      <Route path="/audiences/:user_id" component={AudienceJoinPres} />
      <Route path="/presenter" component={Presenter} />
      <Route path="/user-home" component={UserHome} />
    </Router>
         
                     
    )
    
  

}



export default App;
  
