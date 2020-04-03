import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './nav'

import "../App.css";

class AudienceJoinPres extends Component {
  
    state = {
    
        presentations: []
      };
    
      async componentDidMount() {
        
        const response = await fetch(`http://localhost:3333/join-presentation/${this.props.match.params.user_id}`);
        const data = await response.json();
         
        this.setState({
            presentations: data
          });
      
        }
      
        render() {
          const {presentations} = this.state
          const Links = [
            {href: "/", name: "Home"},
            {href:"/audiences" , name: "Participant List"}
            
         ]
          
          
          return (
          
          <div className="contained">
          <Nav link={Links}/>
          <h1>Your Presentations</h1>
          <hr></hr>
            {presentations.length > 0 ? (
              presentations.map(presentation => (
                <p>
                <span>{presentation.lesson_name} {presentation.green_light}</span>
                </p>
              ))
            ) : (
               <p>You are not a audience member of any presenations.</p>
            )
          }
          </div>
               
                           
          )
          
        }
    
    }

export default AudienceJoinPres;
  