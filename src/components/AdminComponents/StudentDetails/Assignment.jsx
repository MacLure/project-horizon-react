import React, { Component } from "react";
import Submission from './Submission.css';

class Assignment extends Component {
  state = {
    assignment: this.props.assignment,
    submission: this.props.submission
  };

  render() {
    return (
      <div className="assignment">
        <div>{this.props.assignment.name}</div>
        <div>{this.props.assignment.due_date}</div>
        <div>{this.props.assignment.body}</div>
      </div>
    );
  }
}

export default Assignment;
