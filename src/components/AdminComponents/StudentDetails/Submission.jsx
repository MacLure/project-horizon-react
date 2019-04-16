import React, { Component } from "react";

class Submission extends Component {
  state = {};

  render() {
    return (
      <div style={{ height: "900px", backgroundColor: "pink" }}>
        submission: {this.props.submission ? this.props.submission.id : null}
      </div>
    );
  }
}

export default Submission;
