import React, { Component } from 'react';
import StudentStyles from './../../Student.css'
import StudentAssignmentsList from './StudentAssignmentsList';
import SubmissionDetails from './SubmissionDetails';
import SubmissionComments from './../CommonComponents/SubmissionComment';
import NewSubmissionForm from './NewSubmissionForm';
import StudentAssignmentDetails from './StudentAssignmentDetails'
import StudentSubmissionComments from './StudentSubmissionComments'
import StudentEventsList from './StudentEventsList'

class StudentAssignmentsContainer extends Component {
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

    let showAssignmentDetails = <div className="noAssignmentSelected">No assignment selected</div>;
    let showSubmission = null;
    let showSubmissionComments = null;

    if(this.state.onFocusData !== null ){
      if (this.props.submissions.filter(submission => submission.assignment_id === this.state.onFocusData.id).length !== 0) {
          showSubmission = <SubmissionDetails
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
      showAssignmentDetails = <StudentAssignmentDetails
        assignment={this.state.onFocusData}
        submission={this.props.submissions.filter(submission => submission.assignment_id === this.state.onFocusData.id)[0]}
      />
    }

    if (this.state.onFocusData !== null && this.props.submissions.filter(submission => submission.assignment_id === this.state.onFocusData.id).length > 0){
      showSubmissionComments = <StudentSubmissionComments
        assignment={this.state.onFocusData}
        submission={this.props.submissions.filter(submission => submission.assignment_id === this.state.onFocusData.id)[0]}
        comments = {this.props.submissionComments.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])}
        admins = {this.props.admins}

      />
      function flatten(array) {
        return array.reduce(function(acc, b) {  
           return acc.concat( Array.isArray(b) ? flatten(b) : b);
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

export default StudentAssignmentsContainer;
