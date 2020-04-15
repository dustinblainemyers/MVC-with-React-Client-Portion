import React, {useState, useEffect}from "react";
import { useAuth0 } from "../react-auth0-spa";
import LogInOut from "./LogInOut";

const UserHome = () => {
  const { user } = useAuth0();
  const [user_id, setUserID] = useState([])
  
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
    <LogInOut/>
     Welcome ! <span>user email : {user.email} </span><span>user id :  {user_id}</span>

    </div>
    
  );
};

export default UserHome;