import React, { Component } from "react";

class Submission extends Component {
  state = {};

  render() {
    return (
      <div class="submission">
        <h2>Submission:</h2>
        <p className="paragraph">{this.props.submission.url}</p>
        <p className="paragraph">{this.props.submission.body}</p>
      </div>
    );
  }
}

export default Submission;
