import React, { Component } from "react";
import StudentStyles from "./../../../Student.css";
import StudentAssignmentsList from "../StudentAssignmentsList";
import SubmissionDetails from "../SubmissionDetails";
import SubmissionComments from "../../CommonComponents/SubmissionComment";
import NewSubmissionForm from "../NewSubmissionForm";
import StudentEventDetails from "./StudentEventDetails";
import StudentSubmissionComments from "../StudentSubmissionComments";
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
      // selectedAssignment: null,
    };
  }

  getOnFocusData = data => {
    console.log("Assignment Data", data);
    this.setState({
      onFocusData: data
      // selectedAssignment:this.props.assignments.indexOf(data)
    });
  };

  render() {
    let showEventDetails = (
      <div className="noAssignmentSelected">
        No event selected.
        {this.props.events.length > 0 ? (
          <div>Please select an event from the list.</div>
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
