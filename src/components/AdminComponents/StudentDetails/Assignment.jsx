import React, { Component } from "react";
import Submission from "./Submission.css";

class Assignment extends Component {
  state = {
    assignment: this.props.assignment,
    submission: this.props.submission
  };

  render() {
    return (
      <div className="assignment">
        <h2 className="sectionTitle">{this.props.assignment.name}</h2>
        <div className="assignmentDetailDate">
          due: {this.props.assignment.due_date}
        </div>
        <div className="submissionBody">{this.props.assignment.body}</div>
      </div>
    );
  }
}

export default Assignment;
