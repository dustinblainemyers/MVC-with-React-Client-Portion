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
    this.socket = socketIOClient(
      `${this.config.socket || this.config.api}?token=${this.props.test}`
    );
    console.log("test prop", this.props.test);

    this.socket.on("FromAPI", (data) => this.updateLight(data));
  }

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    return (
      <Col>
        <CardPanel className='white'>
          <div className='card-text'>{this.props.lesson_name}</div>
          {this.state.Green && <img src={green_light} alt='Light is green' />}
          {!this.state.Green && <img src={red_light} alt='Light is green' />}
          <button
            onClick={() => this.props.handleDelete(this.props.id)}
            className='delete'
          >
            Delete Lesson
          </button>
        </CardPanel>
      </Col>
    );
  }
}
export default Aggregate;
