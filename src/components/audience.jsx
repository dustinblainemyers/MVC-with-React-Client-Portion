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
            {href: "/audience/join-presentation", name: "Join Presentation"},
            {href: "/audience" , name: "Audience"}
         ]
          
          return (
          <>

<Nav link={Links}/>
            {users.length > 0 ? (
              users.map(user => (
                <>
                <p>{user.name} hello</p>
                <p> your user id is {user.id}</p>
                <Link to={`/audience/join-presentation/${user.id}`}>See your presentations</Link>
                </> 
              ))
            ) : (
               <p>no data</p>
            )
          }
          </>
               
                           
          )
          
        }
    
    }

export default Audience;
  