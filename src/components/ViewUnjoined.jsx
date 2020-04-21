import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './nav'

import "../App.css";
  
  class ViewUnjoined extends Component {
    
      state = {
      
          presentations: []
        };
      
        async componentDidMount() {
          console.log("viewunjoined user_id", this.props.user_id)
          const response = await fetch(`http://localhost:3333/misc-endpoints/${this.props.user_id}`);
          // api call returns a list of presentations the user is not a part of.
          // select distinct test_lesson.lesson_name 
          // from test_lesson   inner join  lights on test_lesson.id = lights.lesson_id
          // inner join users on lights.users_id = users.id WHERE users.id != ${users_id}`
          const data = await response.json();
           
          this.setState({
              presentations: [...this.state.presentations, data],
            });
        
          }
        
          render() {
            const {presentations} = this.state
            console.log("presentations in view unjoined", typeof(presentations))
            const Links = [
              {href: "/", name: "Home"},
              {href:"/audiences" , name: "Participant List"}
              
           ]
          
  
          
            
            return (
            
            <div className="contained">
            
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
  
  export default ViewUnjoined;