import React, { useState, useEffect, useReducer } from 'react';
import { useAuth0 } from "../react-auth0-spa";
import Nav from './nav'

import "../App.css";

function Participating(props) {


  const {  loading, user } = useAuth0();
  const {user_id} = props.match.params
  console.log("route params",props)
  console.log("user_id",user_id)
    
    console.log("user",user);
    

    
    const Links = [
      {href: "/user-home", name: "Home"},
      
    
     ]

  
      const [presentations, setPresentations] = useState([])
      
      
      console.log("user email", )
       useEffect(()  => {
        
        async function callApi() {
          if(user.email === false) {
            return false;
          }
          const response = await fetch(`http://localhost:3333/join-presentation/${user.email}`);
          const data = await response.json();
          console.log("api data", data)
          setPresentations(data);
        }
       
        callApi();
        
       
      
        }, [user.email])
      
      const  toggleLight = async (light_id , i, green_light) => {
           console.log(`${light_id}light has been toggled`)
           green_light = !green_light
           console.log("present",presentations)
           await fetch(`http://localhost:3333/join-presentation/lights/togglelight/${light_id}`, 
           {method: 'PUT'}
           );
           const response = await fetch(`http://localhost:3333/join-presentation/${user.email}`);
          const data = await response.json();
          
          let spread;
          setPresentations(data);
          
          // setPresentations([...presentations.splice(i,1,{'green_light':green_light})])
          
           
          
           
           
      } 
        
        
          const notFound = "You are not an audience member of any presentations.";
          
          return (
          
          <div className="contained">
          
          <h1>Your Presentations</h1>
          <Nav link={Links}/>
          <hr></hr>
            {presentations.length > 0 ? (
              presentations.map( (presentation,i) =>  (
                <>
                <span key={presentation.id}>{presentation.lesson_name} {presentation.green_light} </span>
                <p className={presentation.green_light + ''} onClick={() => toggleLight(presentation.id,i,presentation.green_light)} key={presentation.lesson_name}></p>
                
                </>
              ))
            ) : (
              <p>{ notFound}</p>
            )
          }
          </div>
               
                           
          )
          
        
    
    }

export default Participating;
  