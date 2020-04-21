import React, {useState, useEffect}from "react";
import { useAuth0 } from "../react-auth0-spa";
import LogInOut from "./LogInOut";
import AllHosting from "./AllHosting"
import Participating from "./Participating";
import ViewUnjoined from "./ViewUnjoined"




const UserHome = () => {
  const { user } = useAuth0();
  const [user_id, setUserID] = useState([])
 

  async function callApi() {
    if(user.email === false) {
      return false;
    }
    try {
    const response = await fetch(`http://localhost:3333/users/${user.email}`);
    const data = await response.json();
   
    // setUserID(data.id);} 
    setUserID(1)}
    
    catch {
      console.log("there was an error with an api call in UserHome ")
    }
    
  }
  
  useEffect(()  => {
        
   
   
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