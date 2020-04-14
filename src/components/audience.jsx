import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AudienceJoinPres from './AudienceJoinPres'
import "../App.css";
import Nav from './nav'

class Audience extends Component {
  
    state = {
    
        users: []
      };
    
      async componentDidMount() {
        
        const response = await fetch(`http://localhost:3333/users`);
        const data = await response.json();
    
        this.setState({
            users: data
          });
      
        }
      
        render() {
          const {users} = this.state
          console.log('users', users)

          const Links = [
            {href: "/", name: "Home"},
            
         ]
          
          return (
          <>

            <Nav link={Links}/>
            <h1>Users</h1>
            <h3>Click a user to view the presentation they are currently participating in.</h3>
            {users.length > 0 ? (
              users.map(user => (
                <div className="contained">
                <p>{user.name} </p>
                <p> 
                <Link to={`/audience/join-presentation/${user.id}`}>  Participant Link</Link>
                </p> 
                </div> 
              ))
            ) : (
               <p>No Data</p>
            )
          }
          </>
               
                           
          )
          
        }
    
    }
export default Audience;