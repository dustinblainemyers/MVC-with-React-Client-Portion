import React, { Component } from "react";
import { CardPanel, Col, Row } from "react-materialize";
import socketIOClient from "socket.io-client";
import Config from "../../config";
import green_light from "../../images/green_light.svg";
import red_light from "../../images/red_light.svg";

class Aggregate extends Component {
  constructor() {
    super();
    this.state = {
      response: "",

      aggregateLight: "",
      Green: true,
    };
    this.socket = "";
    this.config = Config;
  }

  updateLight = (data) => {
    console.log(this.props.test, "is updating");
    if (data === "Red") {
      this.setState({ Green: false });
    } else {
      this.setState({ Green: true });
    }
  };

  componentDidMount() {
    console.log("socket", this.config.api);
    this.socket = socketIOClient(`${this.config.api}?token=${this.props.test}`);
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
          {this.state.Green && <img src={green_light} alt='Light is green' />}
          {!this.state.Green && <img src={red_light} alt='Light is green' />}
          <button onClick={() => this.props.handleDelete(this.props.id)}>
            Delete Lesson
          </button>
        </CardPanel>
      </Col>
    );
  }
}
export default Aggregate;
