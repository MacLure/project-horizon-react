import React, { Component } from "react";
import { deleteAssignment } from "../../service";
import { editAssignment } from "../../service";
import { connect } from "react-redux";
import AdminStyles from "./../../Admin.css";
import X from "../../assets/Icons/x.svg";
import trash from "../../assets/Icons/trash.svg";
import { formattedDate } from "./../../utilities";

class AdminAssignmentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      assignment: this.props.assignment
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = this.state;
    let assignmentId = this.props.assignment.id;
    editAssignment(assignmentId, data, this.props.token)
      .then(e => e.json())
      .then(e => this.props.assignmentSuccess())
      .then(this.toggleEdit());
  }

  handleDelete = e => {
    e.preventDefault();
    let assignment_id = this.props.assignment.id;
    deleteAssignment(assignment_id, this.props.token)
      .then(e => this.props.deleteSuccess())
      .then(this.props.escapeAssignmentDetailsModal);
  };

  toggleEdit = () => {
    this.setState(this.state.editing ? { editing: false } : { editing: true });
  };

  detailsOrForm = () => {
    return !this.state.editing ? (
      <div class="modalBox">
        <div className="eventAssignmentDates">
          Due: {formattedDate(this.props.assignment.due_date)}
        </div>
        <div className="eventBody">{this.state.assignment.body}</div>
      </div>
    ) : (
      <form onSubmit={this.handleSubmit}>
        <div className="one">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.assignment.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="two">
          <label htmlFor="due_date">Due Date</label>
          <input
            type="date"
            name="due_date"
            value={this.state.assignment.due_date}
            onChange={this.handleChange}
          />
        </div>
        <div className="three">
          <label htmlFor="body">Details</label>
          <textArea
            name="body"
            value={this.state.assignment.body}
            onChange={this.handleChange}
          />
        </div>
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    );
  };

  render() {
    return (
      <div className="modal">
        <div className="modalContainer">
          <div className="eventsContainer">
            <div
              className="modalEscape"
              onClick={this.props.escapeAssignmentDetailsModal}
            >
              <img className="escapeIcon" src={X} alt="exit" />
            </div>
            <h2 className="sectionTitle">{this.state.assignment.name}</h2>
            <div
              className="deleteIconButton"
              onClick={e => {
                this.handleDelete(e);
              }}
            >
              <img className="deleteIcon" src={trash} alt="delete" />
            </div>
            {this.detailsOrForm()}
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
)(AdminAssignmentDetails);
