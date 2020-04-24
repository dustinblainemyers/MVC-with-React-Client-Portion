import React, { Component } from "react";
// import socketIOClient from "socket.io-client";

class Aggregate extends Component {
  constructor() {
    super();
    this.state = {
      response: "",

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

    if (response === "Red") {
      this.setState({ Green: false });
    }
    return (
      <CardPanel className='white'>
        <span className='black-text'>Hosting</span>
        
          
                <Col m={100} s={100} l={100}>
                  <CardPanel className='white' key={presentation.id + i + 1000}>
                    <span className='black-text '>
                      {this.props.lesson_name} 
                    </span>
                    <div
                      className={this.state.Green + ""}
                      
                    ></div>
                  </CardPanel>
                </Col>
        
        <CardPanel/>
        
            
            )
  }
}
export default Aggregate;

