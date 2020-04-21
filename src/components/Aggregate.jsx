import React, { Component } from "react";
// import socketIOClient from "socket.io-client";


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
   
  

    if(response === 'Red') {
      this.setState({Green: false})
    }
    return (
        <>
        
        <h1>{this.props.lesson_name} hello  </h1>
        
        <p></p>
        
        <p className={this.state.Green + ''}></p>
        
        </>
             
                         
        )
  }

}
export default Aggregate;