import React, { Component } from 'react';
import StudentStyles from './../../Student.css'
import StudentAssignmentsList from './StudentAssignmentsList';
import SubmissionDetails from './SubmissionDetails';
import SubmissionComments from './../CommonComponents/SubmissionComment';

class StudentAssignmentsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      assignments: [],
      submissions: [],
      submission_comments: [],
      onFocusData: null,
      selectedAssignment: null,
    }

    this.getAssignmentInfo = this.getAssignmentInfo.bind(this)

  }

  getAssignmentInfo = () => {
    this.setState( {
      assignments: this.props.assignments,
      submissions: this.props.submissions,
      submission_comments: this.props.submission_comments,
      onFocusData: this.props.onFocusData,
    })
  }

  documentDidMount() {
    this.getAssignmentInfo()
  }

  onAssignmentClick = (data) => {
    console.log('Assignment Data',data)
    this.setState({
      onFocusData:data,
      selectedAssignment:this.props.assignments.indexOf(data)
    })
  }


  render() {

    return (
      <React.Fragment>
        <div className="assignmentContainer">
          <StudentAssignmentsList
            submissions={this.props.submissions}
            assignments={this.props.assignments}
            submissionComments={this.props.submissionComments}
            onCohortClick={this.onAssignmentClick}
            student={this.props.student}
            />
        </div>
      </React.Fragment>
    );
  }

}

export default StudentAssignmentsContainer;
