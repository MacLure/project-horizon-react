import React, { Component } from "react";

class Submission extends Component {
  state = {};

  render() {
    return (
      <div class="submission">
        submission:
        <div>{this.props.submission.url}</div>
        <div>{this.props.submission.body}</div>
      </div>
    );
  }
}

export default Submission;
