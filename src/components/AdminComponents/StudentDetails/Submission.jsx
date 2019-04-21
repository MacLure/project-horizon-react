import React, { Component } from "react";

class Submission extends Component {
  state = {};

  render() {
    return (
      <div className="assignment">
        <h2 className="sectionTitle">
          {this.props.student.first_name}'s Submission:
        </h2>
        <div className="submissionBody">{this.props.submission.url}</div>
        <div className="submissionBody">{this.props.submission.body}</div>
      </div>
    );
  }
}

export default Submission;
