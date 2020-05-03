import React, { Component } from "react";
import { CardPanel, Col, Row } from "react-materialize";
import socketIOClient from "socket.io-client";

class Aggregate extends Component {
  constructor() {
    super();
    this.state = {
      response: "",

      aggregateLight: "",
      Green: true,
    };
    this.socket = "";
  }

  updateLight = (data) => {
    if (data === "Red") {
      this.setState({ Green: false });
    } else {
      this.setState({ Green: true });
    }
  };

  componentDidMount() {
    this.socket = socketIOClient(`127.0.0.1:4001?token=${this.props.test}`);
    console.log("test prop", this.props.test);

    this.socket.on("FromAPI", (data) => this.updateLight(data));
  }

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    return (
      <Col m={100} s={100} l={100}>
        <CardPanel className='white'>
          <span className='black-text '>{this.props.lesson_name}</span>
          <div className={this.state.Green + ""}></div>
          <button onClick={() => this.props.handleDelete(this.props.id)}>
            Delete
          </button>
        </CardPanel>
      </Col>
    );
  }
}
export default Aggregate;
