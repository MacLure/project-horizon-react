import React, { Component } from "react";
import StudentStyles from "./../../../Student.css";
import StudentAssignmentsList from "./StudentAssignmentsList";
import SubmissionDetails from "./SubmissionDetails";
import SubmissionComments from "../../CommonComponents/SubmissionComment";
import NewSubmissionForm from "./NewSubmissionForm";
import StudentAssignmentDetails from "./StudentAssignmentDetails";
import StudentSubmissionComments from "./StudentSubmissionComments";
import StudentEventsList from "../events/StudentEventsList";
import { getStudentDashboardData } from "../../../service";
import { connect } from "react-redux";

class StudentAssignmentsContainer extends Component {
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
    this.setState({
      onFocusData: data
      // selectedAssignment:this.props.assignments.indexOf(data)
    });
  };

  reload = () => {
    if (this.props.token != null) {
      getStudentDashboardData(this.props.token)
        .then(response => response.json())
        .then(response => {
          this.setState({
            student: response.student,
            cohort: response.cohort,
            classmates: response.classmates,
            assignments: response.assignments,
            submissions: response.submissions,
            submissionComments: response.submission_comments,
            admins: response.admins,
            events: response.events
          });
        });
    } else {
      this.props.history.push("/");
    }
  };

  render() {
    let showAssignmentDetails = (
      <div className="noAssignmentSelected">
        No assignment selected.
        {this.props.assignments.length > 0 ? (
          <div>Please select an assignment from the list.</div>
        ) : null}
      </div>
    );
    let showSubmission = null;
    let showSubmissionComments = null;

    if (this.state.onFocusData !== null) {
      if (
        this.props.submissions.filter(
          submission => submission.assignment_id === this.state.onFocusData.id
        ).length !== 0
      ) {
        showSubmission = (
          <SubmissionDetails
            submission={
              this.props.submissions.filter(
                submission =>
                  submission.assignment_id === this.state.onFocusData.id
              )[0]
            }
            assignment={this.state.onFocusData}
            submissionComments={this.state.submissionComments}
            deleteSuccess={this.reload}
          />
        );
      } else {
        showSubmission = (
          <NewSubmissionForm
            assignment={this.state.onFocusData}
            student={this.props.student}
            submissionSuccess={this.reload}
          />
        );
      }
    }

    if (this.state.onFocusData !== null) {
      showAssignmentDetails = (
        <StudentAssignmentDetails
          assignment={this.state.onFocusData}
          submission={
            this.props.submissions.filter(
              submission =>
                submission.assignment_id === this.state.onFocusData.id
            )[0]
          }
        />
      );
    }

    if (
      this.state.onFocusData !== null &&
      this.props.submissions.filter(
        submission => submission.assignment_id === this.state.onFocusData.id
      ).length > 0
    ) {
      showSubmissionComments = (
        <StudentSubmissionComments
          assignment={this.state.onFocusData}
          submission={
            this.props.submissions.filter(
              submission =>
                submission.assignment_id === this.state.onFocusData.id
            )[0]
          }
          comments={this.props.submissionComments.reduce(
            (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b),
            []
          )}
          admins={this.props.admins}
        />
      );
      function flatten(array) {
        return array.reduce(function(acc, b) {
          return acc.concat(Array.isArray(b) ? flatten(b) : b);
        }, []);
      }
    }

    return (
      <div className="assignmentContainer">
        <StudentAssignmentsList
          submissions={this.props.submissions}
          assignments={this.props.assignments}
          submissionComments={this.props.submissionComments}
          getOnFocusData={this.getOnFocusData}
          student={this.props.student}
          cohort={this.props.cohort}
        />

        <div className="submissionContainer">
          {showAssignmentDetails}
          {showSubmission}
          {showSubmissionComments}
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
)(StudentAssignmentsContainer);
