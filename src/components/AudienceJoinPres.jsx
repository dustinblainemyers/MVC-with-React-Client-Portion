import React, { useState, useEffect } from 'react';

import Nav from './nav'

import "../App.css";

function AudienceJoinPres(props) {

    const Links = [
      {href: "/", name: "Home"},
      {href:"/audiences" , name: "Participant List"}
    
     ]
  
      const [presentations, setPresentations] = useState([])
      const {user_id} = props.match.params
      console.log("user id", user_id)
       useEffect(()  => {
        
        async function callApi() {
          if(user_id === '' || user_id === null) {
            return 
          }
          const response = await fetch(`http://localhost:3333/join-presentation/${user_id}`);
          const data = await response.json();
          console.log("api data", data)
          setPresentations(data);
        }
       
        callApi();
        
       
      
        }, [user_id])
      
        
        

        
          
          return (
          
          <div className="contained">
          <Nav link={Links}/>
          <h1>Your Presentations</h1>
          <hr></hr>
            {presentations.length > 0 ? (
              presentations.map(presentation =>  (
                <>
                <span>{presentation.lesson_name} {presentation.green_light}</span>
                <p className={presentation.green_light + ''}></p>
                
                </>
              ))
            ) : (
              <p>You are not an audience member of any presentations.</p>
            )
          }
          </div>
               
                           
          )
          
        
    
    }

export default AudienceJoinPres;
  