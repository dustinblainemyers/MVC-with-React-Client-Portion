import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Aggregate extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      
      aggregateLight: "",
      Green: true,
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(`127.0.0.1:4001?token=${this.props.test}`);
    socket.on("FromAPI", data => this.setState({ response: data }));
    
  }

  render() {
    const { response } = this.state;
    if(response === 'Red') {
      this.setState({Green: false})
    }
    return (
        <>
        <p>aggregateLight:  {response} </p>
        <p className={this.state.Green + ''}></p>
        
        </>
             
                         
        )
  }
}

export default Aggregate;