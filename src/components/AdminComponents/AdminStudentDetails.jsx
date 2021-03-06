import React, { Component } from "react";
import { deleteStudent } from "../../service";
import { connect } from "react-redux";
import X from "../../assets/Icons/x.svg";
import trash from "../../assets/Icons/trash.svg";
import Assignment from "./StudentDetails/Assignment";
import Submission from "./StudentDetails/Submission";
import SubmissionComments from "./StudentDetails/SubmissionComments";
import { formattedDate } from "./../../utilities";
import AssignmentListItem from "./StudentDetails/AssignmentListItem";

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
      admin: this.props.admin,
      onFocusData: null
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.EditButtonClass = this.EditButtonClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.onAssignmentClick = this.onAssignmentClick.bind(this);
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

  onAssignmentClick = data => {
    this.setState({
      selectedAssignment: this.props.assignments.indexOf(data),
      onFocusData: data
    });
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
                {this.state.assignments.map((assignment, index) => (
                  <AssignmentListItem
                    key={assignment.id}
                    student={this.state.student}
                    submissions={this.state.submissions}
                    assignment={assignment}
                    onAssignmentClick={this.onAssignmentClick}
                    isActive={this.state.selectedAssignment === index}
                  />
                ))}
              </div>
              {this.state.selectedAssignment ? (
                <Assignment assignment={this.state.onFocusData} />
              ) : null}
              {this.state.onFocusData &&
              this.state.submissions.filter(
                submission =>
                  submission.assignment_id === this.state.onFocusData.id &&
                  submission.student_id == this.state.student.id
              ).length > 0 ? (
                <Submission
                  student={this.state.student}
                  assignment={this.state.onFocusData}
                  submission={
                    this.state.submissions.filter(
                      submission =>
                        submission.assignment_id ===
                          this.state.onFocusData.id &&
                        submission.student_id === this.state.student.id
                    )[0]
                  }
                />
              ) : null}
              {this.state.onFocusData &&
              this.state.submissions.filter(
                submission =>
                  submission.assignment_id === this.state.onFocusData.id &&
                  submission.student_id == this.state.student.id
              ).length > 0 ? (
                <SubmissionComments
                  admin={this.state.admin}
                  submission={
                    this.state.submissions.filter(
                      submission =>
                        submission.assignment_id ===
                          this.state.onFocusData.id &&
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
