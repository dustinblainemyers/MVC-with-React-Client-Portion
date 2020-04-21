import React, { Component } from "react";
import Aggregate from "./Aggregate";
import "../App.css";

class AggPage extends Component {
  render() {
    return (
      <>
        <Aggregate
          test={this.props.presentation_id}
          lesson_name={this.props.lesson_name}
          key={this.props.presentation_id}
        />
      </>
    );
  }
}
export default AggPage;
