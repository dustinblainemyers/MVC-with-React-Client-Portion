import React  from 'react';
import LogInOut from "./components/LogInOut";
import UserHome from "./components/UserHome";
import traffic from "./traffic.jpg";

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

       <div className="background" styles={{ backgroundImage:`url(${traffic})` }}></div>
       {/* .background {
        height:300px;
        width:300px;
        background-image: url("/public/traffic-lights-514932_640.jpg"); */}

      
      


      </div>
        
        
      </Route>
      <Route path="/audiences/:user_id" component={Participating} />
      <Route path="/all-hosting" component={AllHosting} />
      <Route path="/user-home" component={UserHome} />
      <Route path="/join-presentation/:user_id" component={JoinPresentation} />
      <Route path="/agg-page/:presentation_id/:presentation_name" component={AggPage} />
      
      

    </Router>
         
                     
    )
    
  

}



export default App;
  
