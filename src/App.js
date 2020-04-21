import React  from 'react';
import LogInOut from "./components/LogInOut";
import UserHome from "./components/UserHome";


import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";

import Participating from './components/Participating'
import AllHosting from './components/AllHosting'
import AggPage from './components/AggPage'
import JoinPresentation from './components/JoinPresentation';



function App() {
  
  const { loading} = useAuth0();

  if (loading) {
    return <></>;
  }

      const Links = [
        {href: "/presenter", name: "Presenter"},
        {href: "/audiences/:user_id?" , name: "Audience"}
     ]
     
      const backgroundImage = '/public/traffic-lights-514932_640.jpg';
    return (
      <Router>
      <Route path="/" exact>
      <h1>Green Light Red Light</h1>
      <div className="container ">
      <div className="login "><LogInOut/></div>


      
      


      </div>
        
        
      </Route>
      
      <Route path="/user-home" component={UserHome} />
   
      
      

    </Router>
         
                     
    )
    
  

}



export default App;
  
