import React, { Component } from "react";
import StudentStyles from "./../../../Student.css";
import { connect } from "react-redux";
import { formattedDate, getHour, getMinute } from "../../../utilities";

class StudentEventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, event_type, date, time, location, body } = this.props.event;

    return (
      <div class="eventDetails">
        <h2 className="sectionTitle">
          {event_type}: {name}
        </h2>
        <div className="date">
          {formattedDate(date)} @ {getHour(time)}:{getMinute(time)}
        </div>
        <div className="date">{location}</div>

        <div className="eventBody">{body}</div>
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
)(StudentEventDetails);
