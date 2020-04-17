import React, {useState, useEffect}from "react";
import { useAuth0 } from "../react-auth0-spa";
import LogInOut from "./LogInOut";
import Nav from './nav'
import { Link} from "react-router-dom"

const UserHome = () => {
  const { user } = useAuth0();
  const [user_id, setUserID] = useState([])
  const Links = [
    {href: "/all-hosting", name: "All Hosting"},
    {href: `/audiences/${user_id}` , name: "All Participating In"}
 ]
  
  useEffect(()  => {
        
    async function callApi() {
      if(user.email === false) {
        return false;
      }
      const response = await fetch(`http://localhost:3333/users/${user.email}`);
      const data = await response.json();
      console.log("api data", data)
      setUserID(data.id);
    }
   
    callApi();
    
   
  
    }, [user_id])

  return (
    <div>
    
     

     
     <h1>Green Light Red Light</h1>
     <p>Logged in as :{user.email}</p>
     <center><LogInOut/></center>
    
      
    <Nav link={Links}/>

    </div>
    
  );
};

export default UserHome;