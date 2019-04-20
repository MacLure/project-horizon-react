import React, { Component } from "react";
import { deleteStudent } from "../../service";
import { connect } from "react-redux";
import AdminStyles from "./../../Admin.css";
import X from "../../assets/Icons/x.svg";
import trash from "../../assets/Icons/trash.svg";
import Assignment from "./StudentDetails/Assignment";
import Submission from "./StudentDetails/Submission";
import SubmissionComments from "./StudentDetails/SubmissionComments";
import checkmark from "./../../assets/Icons/tick.svg";
import exclamation from "./../../assets/Icons/warning.svg";
import { formattedDate } from "./../../utilities";

class AdminStudentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      student: this.props.student,
      admins: this.props.admins,
      assignments: this.props.assignments,
      submissions: this.props.submissions,
      comments: this.props.comments,
      selectedAssignment: null,
      admin: this.props.admin
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.EditButtonClass = this.EditButtonClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleEdit = () => {
    this.setState(this.state.editing ? { editing: false } : { editing: true });
  };

  EditButtonClass = () => (this.state.editing ? "whiteButton" : "addButton");

  handleDelete = e => {
    e.preventDefault();
    let student_id = this.props.student.id;
    deleteStudent(student_id, this.props.token)
      .then(e => this.props.deleteSuccess())
      .then(this.props.escapeStudentDetailsModal);
  };

  selectAssignment = assignment => {
    this.setState({ selectedAssignment: assignment });
  };

  render() {
    return (
      <div className="modal">
        <div className="studentModalContainer">
          <div className="studentsContainer">
            <div
              className="modalEscape"
              onClick={this.props.escapeStudentDetails}
            >
              <img className="escapeIcon" src={X} alt="exit" />
            </div>
            <h2 className="sectionTitle">
              {this.props.student.first_name} {this.props.student.last_name}
            </h2>
            <div
              className="deleteIconButton"
              onClick={e => {
                this.handleDelete(e);
              }}
            >
              <img className="deleteIcon" src={trash} alt="delete" />
            </div>
            <div
              style={{
                height: "550px",
                overflow: "scroll"
              }}
            >
              <div className="studentAssignmentDetailsList">
                <div>
                  {this.state.assignments.map(assignment => (
                    <div
                      key={assignment.id}
                      className="detailsListItem"
                      onClick={e => {
                        this.selectAssignment(assignment);
                      }}
                    >
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "9fr 1fr"
                        }}
                      >
                        <div>
                          <div>{assignment.name}</div>
                          <div className="eventAssignmentDates">
                            {this.props.submissions.filter(
                              submission =>
                                submission.assignment_id === assignment.id &&
                                submission.student_id === this.props.student.id
                            ).length > 0
                              ? `submitted: ${formattedDate(
                                  this.props.submissions.filter(
                                    submission =>
                                      submission.assignment_id ===
                                        assignment.id &&
                                      submission.student_id ===
                                        this.props.student.id
                                  )[0].created_at
                                )}`
                              : "not submitted"}
                          </div>
                        </div>
                        <div>
                          <img
                            style={{ height: "35px" }}
                            src={
                              this.props.submissions.filter(
                                submission =>
                                  submission.assignment_id === assignment.id &&
                                  submission.student_id ===
                                    this.props.student.id
                              ).length > 0
                                ? checkmark
                                : exclamation
                            }
                            className="checkmarkContainer"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {this.state.selectedAssignment ? (
                <Assignment assignment={this.state.selectedAssignment} />
              ) : null}
              {this.state.selectedAssignment &&
              this.state.submissions.filter(
                submission =>
                  submission.assignment_id ===
                    this.state.selectedAssignment.id &&
                  submission.student_id == this.state.student.id
              ).length > 0 ? (
                <Submission
                  assignment={this.state.selectedAssignment}
                  submission={
                    this.state.submissions.filter(
                      submission =>
                        submission.assignment_id ===
                          this.state.selectedAssignment.id &&
                        submission.student_id === this.state.student.id
                    )[0]
                  }
                />
              ) : null}
              {this.state.selectedAssignment &&
              this.state.submissions.filter(
                submission =>
                  submission.assignment_id ===
                    this.state.selectedAssignment.id &&
                  submission.student_id == this.state.student.id
              ).length > 0 ? (
                <SubmissionComments
                  admin={this.state.admin}
                  submission={
                    this.state.submissions.filter(
                      submission =>
                        submission.assignment_id ===
                          this.state.selectedAssignment.id &&
                        submission.student_id === this.state.student.id
                    )[0]
                  }
                  comments={this.state.comments}
                  admins={this.state.admins}
                />
              ) : null}
            </div>
          </div>
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
)(AdminStudentDetails);
