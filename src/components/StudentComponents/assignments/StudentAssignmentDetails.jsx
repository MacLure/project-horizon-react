import React, { Component } from "react";
import StudentStyles from "./../../../Student.css";
import { connect } from "react-redux";
import { formattedDate } from "../../../utilities";

class StudentAssignmentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const assignment = this.props.assignment;

    return (
      <div className="submissionContent">
        <h2 className="assignmentTitle">{assignment.name}</h2>
        <div className="date">Due: {formattedDate(assignment.due_date)}</div>
        <div className="assignmentBody">{assignment.body}</div>
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
)(StudentAssignmentDetails);
