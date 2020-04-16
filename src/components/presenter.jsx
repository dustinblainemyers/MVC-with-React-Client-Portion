import React, { useState,useEffect } from 'react';
import { useAuth0 } from "../react-auth0-spa";
import Nav from './nav'

import "../App.css";

function Presenter(props) {
  
  const { loading, user } = useAuth0();
  console.log("user",user);
  const Links = [
    {href: "/user-home", name: "Home"},
    {href:"/audiences" , name: "Participant List"}
  
   ]

   const [presentations, setPresentations] = useState([])

    
   useEffect(()  => {
        
    async function callApi() {
      if(user.email === false) {
        return false;
      }
      const response = await fetch(`http://localhost:3333/create-presentation/${user.email}`);
      const data = await response.json();
      console.log("api data", data)
      setPresentations(data);
    }
   
    callApi();
    
   
  
    }, [user.email])
      
        
    if (loading) {
      return <div>Loading...</div>;
    }

        
          
          return (
          
          <div className="contained">
          <Nav link={Links}/>
          <h1>Presentations You Are Hosting</h1>
          <hr></hr>
            {presentations.length > 0 ? (
              presentations.map(presentation =>  (
                <>
                <span>{presentation.lesson_name} </span>
            
                
                </>
              ))
            ) : (
               <p>You are not hosting any presentations currently.</p>
            )
          }
          </div>
               
                           
          )
        
        
    
    }

export default Presenter;