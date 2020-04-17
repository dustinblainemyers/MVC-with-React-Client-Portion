import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './nav'

import "../App.css";
  
  class JoinPresentation extends Component {
    
      state = {
      
          presentations: []
        };
      
        async componentDidMount() {
          
          const response = await fetch(`http://localhost:3333/misc-endpoints/${this.props.match.params.user_id}`);
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
            <h1>Join a presentation</h1>
            <hr></hr>
              {presentations.length > 0 ? (
                presentations.map(presentation =>  (
                  <p>
                  <button>{presentation.lesson_name} </button>
                  
                  
                  </p>
                ))
              ) : (
                <p>You are not an audience member of any presentations.</p>
              )
            }
            </div>
                 
                             
            )
            
          }
      
      }
  
  export default JoinPresentation;