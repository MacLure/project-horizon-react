import React, { Component } from "react";
import { deleteEvent } from "../../service";
import { editEvent } from "../../service";
import { connect } from "react-redux";
import AdminStyles from "./../../Admin.css";
import X from "../../assets/Icons/x.svg";
import edit from "../../assets/Icons/edit.svg";
import trash from "../../assets/Icons/trash.svg";
import Assignment from "./StudentDetails/Assignment";

class AdminStudentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      event: this.props.event,
      selectedAssignment: null
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.EditButtonClass = this.EditButtonClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = this.state;
    let eventId = this.props.event.id;
    editEvent(eventId, data, this.props.token)
      .then(e => e.json())
      .then(e => this.props.eventSuccess())
      .then(this.toggleEdit());
  }

  toggleEdit = () => {
    this.setState(this.state.editing ? { editing: false } : { editing: true });
  };

  EditButtonClass = () => (this.state.editing ? "whiteButton" : "addButton");

  handleDelete = e => {
    e.preventDefault();
    let event_id = this.props.event.id;
    deleteEvent(event_id, this.props.token)
      .then(e => this.props.deleteSuccess())
      .then(this.props.escapeStudentDetailsModal);
  };

  selectAssignment = assignment => {
    this.setState({ selectedAssignment: assignment });
  };

  render() {
    return (
      <div className="modal">
        <div className="modalContainer">
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
              className="deleteEventButton"
              onClick={e => {
                this.handleDelete(e);
              }}
            >
              <img className="deleteIcon" src={trash} alt="delete" />
            </div>
            <div
              style={{
                height: "385px",
                overflow: "scroll"
              }}
            >
              <div className="studentAssignmentDetailsList">
                <div>
                  {this.props.assignments.map(assignment => (
                    <div
                      key={assignment.id}
                      className="detailsListItem"
                      onClick={e => {
                        this.selectAssignment(assignment);
                      }}
                    >
                      <div>{assignment.name}</div>
                      <div className="eventAssignmentDates">
                        {this.props.submissions.filter(
                          submission =>
                            submission.assignment_id === assignment.id &&
                            submission.student_id === this.props.student.id
                        ).length > 0
                          ? `submitted: ${
                              this.props.submissions.filter(
                                submission =>
                                  submission.assignment_id === assignment.id &&
                                  submission.student_id ===
                                    this.props.student.id
                              )[0].created_at
                            }`
                          : "not submitted"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {this.state.selectedAssignment ? (
                <Assignment assignment={this.state.selectedAssignment} />
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
