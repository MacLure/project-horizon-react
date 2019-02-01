import React, { Component } from 'react';
import StudentAssignment from './StudentAssignment';
import StudentProgressCircle from './StudentProgressCircle';
import styled from 'styled-components';
import SubmissionDetails from './SubmissionDetails';

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

  const {assignments, submissions, submission_comments} = this.props
    
    const assignmentProgress = () => {
        return Math.round( submissions.length / assignments.length * 100)
    }

    let submissionDetails = null;
    
    if(this.state.onFocusData !== -1 && this.state.onFocusData !== null && typeof(this.state.onFocusData) != undefined){
      submissionDetails = <SubmissionDetails
        onFocusData={this.state.onFocusData}
        submission_comments={this.props.submission_comments}
        deleteSuccess={this.reload}
      />
    }


    return (
      <React.Fragment>
        <p style={{textAlign:'center'}}>progress: {assignmentProgress()}%</p>
        <div style={{marginLeft:"500px"}}>
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
      </React.Fragment>
     );
  }
}

export default StudentAssignmentsList;
