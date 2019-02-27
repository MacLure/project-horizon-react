import React, { Component } from 'react';
import StudentStyles from './../../Student.css'
import StudentAssignmentsList from './StudentAssignmentsList';
import SubmissionDetails from './SubmissionDetails';
import SubmissionComments from './../CommonComponents/SubmissionComment';
import NewSubmissionForm from './NewSubmissionForm';


class StudentAssignmentsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      student: this.props.student,
      assignments: this.props.assignments,
      submissions: this.props.submissions,
      submission_comments: this.props.submission_comments,
      onFocusData: null,
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

    let showSubmission = <div className="noAssignmentSelected">No assignment selected</div>;

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

    return (
        <div className="assignmentContainer">
          <div className="</div>">
            <StudentAssignmentsList
              submissions={this.props.submissions}
              assignments={this.props.assignments}
              submissionComments={this.props.submissionComments}
              getOnFocusData={this.getOnFocusData}
              student={this.props.student}
            />
          </div>
          <div className="submissionContainer">
            {showSubmission}
          </div>

        </div>
    );
  }

}

export default StudentAssignmentsContainer;
