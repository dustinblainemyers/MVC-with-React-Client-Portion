import React  from 'react';
import LogInOut from "./components/LogInOut";
import UserHome from "./components/UserHome";

import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";

import Participating from './components/Participating'
import AllHosting from './components/AllHosting'
import AggPage from './components/AggPage'



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
      <Route path="/audiences/:user_id" component={Participating} />
      <Route path="/all-hosting" component={AllHosting} />
      <Route path="/user-home" component={UserHome} />
      <Route path="/agg-page/:presentation_id" component={AggPage} />
      

    </Router>
         
                     
    )
    
  

}



export default App;
  
