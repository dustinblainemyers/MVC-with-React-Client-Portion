import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './nav'

import "../App.css";

class Presenter extends Component {
  
    state = {
    
        presentations: []
      };
    
      async componentDidMount() {
        
        const response = await fetch(`http://localhost:3333/join-presentation/happypath/reallyhappy`);
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
          <h1>Introduction To The Hustle</h1>
          <hr></hr>
            {presentations.length > 0 ? (
              presentations.map(presentation =>  (
                <p>
                <span>{presentation.name} {presentation.green_light}</span>
                <p className={presentation.green_light + ''}></p>
                
                </p>
              ))
            ) : (
               <p>No current presentations found.</p>
            )
          }
          </div>
               
                           
          )
          
        }
    
    }

export default Presenter;