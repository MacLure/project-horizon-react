import React, { Component } from "react";
import StudentStyles from "./../../../Student.css";
import StudentEventDetails from "./StudentEventDetails";
import StudentEventsList from "./StudentEventsList";

class StudentEventsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: this.props.student,
      assignments: this.props.assignments,
      submissions: this.props.submissions,
      submission_comments: this.props.submission_comments,
      onFocusData: null,
      events: this.props.events
    };
  }

  getOnFocusData = data => {
    this.setState({
      onFocusData: data
    });
  };

  render() {
    let showEventDetails = (
      <div className="noAssignmentSelected">
        No event selected.
        {this.props.events.length > 0 ? (
          <div className="selectInstructions">
            Please select an event from the list.
          </div>
        ) : null}{" "}
      </div>
    );

    if (this.state.onFocusData !== null) {
      showEventDetails = <StudentEventDetails event={this.state.onFocusData} />;
    }

    return (
      <div className="assignmentContainer">
        <StudentEventsList
          events={this.props.events}
          getOnFocusData={this.getOnFocusData}
        />

        <div className="submissionContainer">{showEventDetails}</div>
      </div>
    );
  }
}

export default StudentEventsContainer;
