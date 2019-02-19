import React, { Component } from 'react';
import StudentAssignment from './StudentAssignment';
import StudentStyles from './../../Student.css'
import SubmissionDetails from './SubmissionDetails';
import NewSubmissionForm from './NewSubmissionForm';


class StudentAssignmentsList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedAssignment: null,
      onFocusData: null,
      assignments: [],
      submissions: [],
      submission_comments: []
    }

    this.onAssignmentClick = this.onAssignmentClick.bind(this)

  }

  reload = () =>{
    console.lot("OK")
  }

  onAssignmentClick = (data) => {
    console.log('Assignment Data',data)
    this.setState({
      onFocusData:data,
      selectedAssignment:this.props.assignments.indexOf(data)
    })
  }

  getAssignmentInfo = () => (
    this.setState( {
      assignments: this.props.assignments,
      submissions: this.props.submissions,
      submission_comments: this.props.submission_comments
    })
  )

documentDidMount() {
  this.getAssignmentInfo()
}

  render() {

  const {assignments, submissions, submissionComments} = this.props


    let showSubmission = null;

    if(this.state.onFocusData !== null ){
      if (this.props.submissions.filter(submission => submission.assignment_id === this.state.onFocusData.id).length !== 0) {
          showSubmission = <SubmissionDetails
          submission={this.props.submissions.filter(submission => submission.assignment_id === this.state.onFocusData.id)[0]}
          submissionComments={submissionComments}
          deleteSuccess={this.reload}
        />
      } else {
        showSubmission = <NewSubmissionForm assignment = {this.state.onFocusData} />
      }
    }
    return (
      <React.Fragment>
        {assignments.map((assignment, index) => (
        <StudentAssignment
          key={assignment.id}
          id={assignment.id}
          name={assignment.name}
          body={assignment.body}
          dueDate={assignment.due_date}
          data={assignment}
          onAssignmentClick={this.onAssignmentClick}
          isActive={this.state.selectedCohort === index}
          submission={this.props.submissions.filter(submission => submission.assignment_id === assignment.id)[0]}
        />
        ))}

        {showSubmission}
      </React.Fragment>
     );
  }
}

export default StudentAssignmentsList;
