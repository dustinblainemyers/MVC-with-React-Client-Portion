import React, {useState, useEffect}from "react";
import { useAuth0 } from "../react-auth0-spa";
import LogInOut from "./LogInOut";
import Nav from './nav'
import AllHosting from "./AllHosting"
import Participating from "./Participating";
import ViewUnjoined from "./ViewUnjoined"


const UserHome = () => {
  const { user } = useAuth0();
  const [user_id, setUserID] = useState([])
  const Links = [
    {href: "/all-hosting", name: "All Hosting"},
    {href: `/audiences/${user_id}` , name: "All Participating In"},
    // {href: `/create-presentation/${user_id}` , name: "Create Presentation"},
    // {href: `/join-presentation/${user_id}` , name: "Join Presentation"},

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
      console.log("user id after api call", user_id)
    }
   
    callApi();
    
   
  
    }, [user_id])

  return (
    <div>
    
     

     
     <h1>Green Light Red Light</h1>
     
     <hr></hr>
     <p>Logged in as :{user.email}</p>
     <center><LogInOut/></center>
     <AllHosting/>
     <Participating user_id={user_id}/>
     <ViewUnjoined user_id={user_id}/>
     
    
      
    

    </div>
    
  );
};

export default UserHome;