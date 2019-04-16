import React, { Component } from "react";
import { createNewSubmissionComment } from "./../../../service";
import { connect } from "react-redux";

class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin_id: this.props.admin.id,
      submission_id: this.props.submission.id,
      body: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    let data = this.state;
    createNewSubmissionComment(data, this.props.token)
      .then(e => e.json())
      .then(this.props.escapeNewEventModal);
  };

  render() {
    return (
      <div style={{ backgroundColor: "darkcyan" }}>
        NEW COMMENT
        <form method="post" onSubmit={this.handleSubmit}>
          <label htmlFor="body">Body</label>
          <input
            type="text"
            name="body"
            placeholder="new comment..."
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    isAuthenticating: state.isAuthenticating,
    currentUser: state.currentUser,
    errors: state.errors
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onTokenReceive: token =>
      dispatch({ type: "SET_USER_TOKEN", payload: token })
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(NewComment);
