import React, { Component } from "react";

class Assignment extends Component {
  state = {
    assignment: this.props.assignment,
    submission: this.props.submission
  };

  render() {
    return (
      <div style={{ backgroundColor: "green" }}>
        <div>{this.props.assignment.name}</div>
        <div>{this.props.assignment.due_date}</div>
        <div>{this.props.assignment.body}</div>
      </div>
    );
  }
}

export default Assignment;
