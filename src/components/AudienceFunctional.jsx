import React, { useState } from 'react';

import Nav from './nav'

import "../App.css";

function AudienceJoinPres(props) {
  
      const [presentations, setPresentations] = useState([])
    
      useEffect(() => {
        
        const response = await fetch(`http://localhost:3333/join-presentation/${props.match.params.user_id}`);
        const data = await response.json();
         
        setPresentations(data);
      
        }, [])
      
        
        

        
          
          return (
          
          <div className="contained">
          <Nav link={Links}/>
          <h1>Your Presentations</h1>
          <hr></hr>
            {presentations.length > 0 ? (
              presentations.map(presentation =>  (
                <p>
                <span>{presentation.lesson_name} {presentation.green_light}</span>
                <p className={presentation.green_light + ''}></p>
                
                </p>
              ))
            ) : (
              <p>You are not an audience member of any presentations.</p>
            )
          }
          </div>
               
                           
          )
          
        
    
    }

export default AudienceJoinPres;