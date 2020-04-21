import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Nav from './nav'

class Aggregate extends Component {
  constructor() {
    super();
    this.state = {
      response: '',
      
      aggregateLight: "",
      Green: true,
    };
  }


//   updateLight = data  => {
//     this.setState(prevState => ({
//       response: [...prevState.response, data],
      
//      }))
//   }

//   componentDidMount() { 
//     const socket = socketIOClient(`127.0.0.1:4001?token=${this.props.test}`);

//     socket.on("FromAPI", this.updateLight)
//    }
    

//    componentWillUnmount() {
//     const socket = socketIOClient(`127.0.0.1:4001?token=${this.props.test}`);
//     socket.off('FromAPI', this.updateLight);
//  }  


    
    
  render() {
    const { response } = this.state;
    const Links = [
      
      {href: "/user-home", name: "Home"},
      {href: "/all-hosting", name: "All Hosting"}
      
    
     ]

    if(response === 'Red') {
      this.setState({Green: false})
    }
    return (
        <>
        
        <h1>{this.props.name}  </h1>
        <Nav link={Links}/>
        <p></p>
        
        <p className={this.state.Green + ''}></p>
        
        </>
             
                         
        )
  }

}
export default Aggregate;