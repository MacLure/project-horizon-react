import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createNewSubmission } from "./../../../service";

class NewSubmissionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      body: "",
      assignment_id: this.props.assignment.id,
      student_id: this.props.student.id,
      is_approved: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = this.state;
    createNewSubmission(data, this.props.token)
      .then(e => e.json())
      .then(e => this.props.submissionSuccess());
  }

  render() {
    return (
      <div className="studentSubmissionContainer">
        <h2 className="sectionTitle">Your Submission</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="url">URL</label>
            <input
              className="studentSubmissionURLInput"
              type="text"
              placeholder="www.mysubmission.com..."
              name="url"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <textArea
              type="text_area"
              rows="10"
              cols="40"
              name="body"
              placeholder={"Your body text here (if applicable)"}
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
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
)(NewSubmissionForm);
