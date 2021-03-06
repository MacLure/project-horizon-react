import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewAssignment } from "./../../service";
import X from "../../assets/Icons/x.svg";

class NewAssignmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cohort_id: this.props.cohortId,
      name: "",
      due_date: "",
      body: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    let data = this.state;
    createNewAssignment(data, this.props.token)
      .then(e => e.json())
      .then(e => this.props.assignmentSuccess())
      .then(this.props.escapeNewAssignmentModal);
  };

  render() {
    return (
      <div className="modal">
        <div className="modalContainer">
          <div
            className="modalEscape"
            onClick={this.props.escapeNewAssignmentModal}
          >
            <img className="escapeIcon" src={X} alt="exit" />
          </div>
          <h2 className="formTitle">Create Assignment</h2>
          <form className="newAssignmentForm" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Assignment Name</label>
              <input
                type="text"
                name="name"
                placeholder="Personal Branding"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <label htmlFor="due_date">Due Date</label>
              <input
                type="date"
                name="due_date"
                value={this.state.due_date}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="body">Assignment Body</label>
              <textarea
                rows="10"
                cols="32"
                name="body"
                placeholder="body"
                value={this.state.body}
                onChange={this.handleChange}
              />
              <br />
              <button className="submitButton" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
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
)(NewAssignmentForm);
