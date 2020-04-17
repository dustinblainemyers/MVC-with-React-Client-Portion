import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class SocketTest extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001",
      aggregateLight: "",
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    return (
        <>

          
          <h1>Users</h1>
          <h3>Click a user to view the presentation they are currently participating in.</h3>
          {response.length > 0 ? (
            response.map(indice => (
              <div className="contained">
              <p>Lesson Name: {indice.lesson_name} </p>
              <p> 
              
              </p> 
              </div> 
            ))
          ) : (
             <p>Retrieving Light Status</p>
          )
        }
        </>
             
                         
        )
  }
}

export default SocketTest;