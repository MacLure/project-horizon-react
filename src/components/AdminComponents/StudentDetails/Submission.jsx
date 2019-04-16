import React, { Component } from "react";

class Submission extends Component {
  state = {};

  render() {
    return (
      <div style={{ backgroundColor: "pink" }}>
        submission:
        <div>{this.props.submission.url}</div>
        <div>{this.props.submission.body}</div>
      </div>
    );
  }
}

export default Submission;
