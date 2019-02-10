import React, { Component } from 'react';
import StudentAssignment from './StudentAssignment';
import StudentProgressCircle from './StudentProgressCircle';
import styled from 'styled-components';
import SubmissionDetails from './SubmissionDetails';
import NewSubmissionForm from './NewSubmissionForm';

const Container = styled.div`


`

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

    const assignmentProgress = () => {
        return Math.round( submissions.length / assignments.length * 100)
    }

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
        <p style={{textAlign:'center'}}>progress: {assignmentProgress()}%</p>
        <div style={{marginLeft:"200px"}}>
        <StudentProgressCircle progress={assignmentProgress}/>
        </div>
        {assignments.map((assignment, index) => (
        <StudentAssignment
          key={assignment.id}
          name={assignment.name}
          body={assignment.body}
          dueDate={assignment.due_date}
          data={assignment}
          onAssignmentClick={this.onAssignmentClick}
          isActive={this.state.selectedCohort === index}
        />
        ))}

        {showSubmission}
      </React.Fragment>
     );
  }
}

export default StudentAssignmentsList;
