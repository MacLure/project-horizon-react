import React, { Component } from 'react';
import StudentStyles from './../../Student.css'
import StudentAssignmentsList from './StudentAssignmentsList';
import SubmissionDetails from './SubmissionDetails';
import SubmissionComments from './../CommonComponents/SubmissionComment';
import NewSubmissionForm from './NewSubmissionForm';
import StudentEventDetails from './StudentEventDetails'
import StudentSubmissionComments from './StudentSubmissionComments'
import StudentEventsList from './StudentEventsList'

class StudentEventsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      student: this.props.student,
      assignments: this.props.assignments,
      submissions: this.props.submissions,
      submission_comments: this.props.submission_comments,
      onFocusData: null,
      events: this.props.events,
      // selectedAssignment: null,
    }
  }

  getOnFocusData = (data) => {
    console.log('Assignment Data',data)
    this.setState({
      onFocusData:data,
      // selectedAssignment:this.props.assignments.indexOf(data)
    })
  }

  render() {

    let showEventDetails = <div className="noAssignmentSelected">No event selected</div>;
    let showSubmission = null;
    let showSubmissionComments = null;

    if(this.state.onFocusData !== null ){
      if (this.props.submissions.filter(submission => submission.assignment_id === this.state.onFocusData.id).length !== 0) {
          showSubmission = <StudentEventDetails
          submission={this.props.submissions.filter(submission => submission.assignment_id === this.state.onFocusData.id)[0]}
          assignment={this.state.onFocusData}
          submissionComments={this.state.submissionComments}
          deleteSuccess={this.reload}
        />
      } else {
        showSubmission = <NewSubmissionForm assignment = {this.state.onFocusData} student = {this.state.student} />
      }
    }

    if (this.state.onFocusData !== null ){
      showEventDetails = <StudentEventDetails
        event={this.state.onFocusData}
        submission={this.props.submissions.filter(submission => submission.assignment_id === this.state.onFocusData.id)[0]}
      />
    
    }

    return (
      <div className="assignmentContainer">
        <StudentEventsList
          events={this.props.events}
          submissions={this.props.submissions}
          assignments={this.props.assignments}
          submissionComments={this.props.submissionComments}
          getOnFocusData={this.getOnFocusData}
          student={this.props.student}
          cohort={this.props.cohort}
        />

        <div className="submissionContainer">
          {showEventDetails}
        </div>
      </div>
    );
  }
}

export default StudentEventsContainer;
