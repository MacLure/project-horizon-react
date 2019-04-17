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
        <h2>{this.props.assignment.name}</h2>
        <p className="paragraph">due: {this.props.assignment.due_date}</p>
        <p className="paragraph">{this.props.assignment.body}</p>
      </div>
    );
  }
}

export default Assignment;
