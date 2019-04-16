import React, { Component } from "react";
import Submission from "./Submission";

class Assignment extends Component {
  state = {};

  render() {
    return (
      <div style={{ backgroundColor: "green" }}>
        <div>{this.props.assignment.name}</div>
        <div>{this.props.assignment.due_date}</div>
        <div>{this.props.assignment.body}</div>
        <Submission assignment={this.props.assignment} />
      </div>
    );
  }
}

export default Assignment;
