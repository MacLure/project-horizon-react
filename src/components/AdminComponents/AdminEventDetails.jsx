import React, { Component } from "react";
import { deleteEvent } from ".././../service";
import { editEvent } from "../../service";
import { connect } from "react-redux";
import X from "../../assets/Icons/x.svg";
import edit from "../../assets/Icons/edit.svg";
import trash from "../../assets/Icons/trash.svg";
import { formattedDate, getHour, getMinute } from "./../../utilities";

class AdminEventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      event: this.props.event
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

  handleSubmit(event) {
    event.preventDefault();
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
      .then(this.props.escapeEventDetailsModal);
  };

  detailsOrForm = () => {
    return !this.state.editing ? (
      <div class="modalBox">
        <div className="eventAssignmentDates">
          {formattedDate(this.props.event.date)} @{" "}
          {getHour(this.props.event.time)}:{getMinute(this.props.event.time)}
        </div>
        <div className="eventAssignmentDates">{this.state.event.location}</div>
        <div className="eventBody">{this.state.event.body}</div>
      </div>
    ) : (
      <form onSubmit={this.handleSubmit}>
        <div className="one">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.event.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="two">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={this.state.event.date}
            onChange={this.handleChange}
          />
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="time"
            value={this.state.event.time}
            onChange={this.handleChange}
          />
        </div>
        <div className="three">
          <label htmlFor="body">Details</label>
          <textArea
            name="body"
            value={this.state.event.body}
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
              onClick={this.props.escapeEventDetailsModal}
            >
              <img className="escapeIcon" src={X} alt="exit" />
            </div>
            <h2 className="sectionTitle">
              {this.state.event.event_type}: {this.state.event.name}
            </h2>
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
)(AdminEventDetails);
